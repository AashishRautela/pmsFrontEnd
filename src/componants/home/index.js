'use client';
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import {
  handleErrorResponse,
  renderError,
  renderUserWithIcon
} from '@/utils/common';
import dayjs from 'dayjs';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ProjectSelector } from './selector';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '@/store/slices/home';

function Index() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    status: null,
    role: null,
    sort: '',
    page: 1,
    limit: 10
  });
  console.log('filters-->', filters);

  const dispatch = useDispatch();

  // store
  const { loading, projects } = useSelector(ProjectSelector);
  console.log('projects--->', projects);

  // form related
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const handleFinish = async (values) => {
    setConfirmLoading(true);

    // Format dates into dd-mm-yyyy
    const payload = {
      ...values,
      startDate: values.startDate
        ? values.startDate.format('DD-MM-YYYY')
        : null,
      endDate: values.endDate ? values.endDate.format('DD-MM-YYYY') : null
    };

    try {
      const backend = process.env.NEXT_PUBLIC_DEV_APIS_URI;
      const response = await axios.post(`${backend}/api/v1/project`, payload, {
        withCredentials: true
      });

      console.log('✅ API Response:', response.data);
      toast.success(response.data.message);

      setOpen(false);
      form.resetFields();
    } catch (error) {
      console.error('❌ API Error:', error.response?.data || error.message);
      toast.error(error.response.data.message || error.message);
    } finally {
      setConfirmLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  const handleFilter = (field, e) => {
    setFilters((prev) => ({
      ...prev,
      [field]: field == 'search' ? e.target.value : e
    }));
  };

  return (
    <>
      <Modal
        title='Create Project'
        centered
        open={open}
        onOk={() => form.submit()}
        okText='Create'
        maskClosable={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className='modal_styling'
        okButtonProps={{ disabled: !submittable }} // disable until form valid
      >
        <Form layout='vertical' form={form} onFinish={handleFinish}>
          {/* first row */}
          <div className='w-full flex gap-2'>
            <Form.Item
              label='Project Name'
              name='name'
              className='w-1/2'
              validateTrigger='onBlur'
              rules={[
                {
                  required: true,
                  message: renderError('Please Enter Project Name')
                },
                {
                  min: 3,
                  message: renderError(
                    'Project name must be between 3–30 characters'
                  )
                },
                {
                  max: 30,
                  message: renderError(
                    'Project name must be between 3–30 characters'
                  )
                }
              ]}
            >
              <Input placeholder='Project Name' />
            </Form.Item>

            <Form.Item
              label='Key'
              name='key'
              className='w-1/2'
              validateTrigger='onBlur'
              rules={[
                {
                  required: true,
                  message: renderError('Please Enter Project key')
                },
                {
                  min: 4,
                  message: renderError(
                    'Project key must be between 4–10 characters'
                  )
                },
                {
                  max: 10,
                  message: renderError(
                    'Project key must be between 4–10 characters'
                  )
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: renderError(
                    'Project key must be alphanumeric with no spaces'
                  )
                }
              ]}
            >
              <Input
                placeholder='Project key'
                onChange={(e) =>
                  form.setFieldsValue({ key: e.target.value.toUpperCase() })
                }
              />
            </Form.Item>
          </div>

          {/* description */}
          <div className='w-full'>
            <Form.Item label='Description' name='description'>
              <Input.TextArea
                placeholder='Description'
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Form.Item>
          </div>

          {/* dates */}
          <div className='w-full flex gap-2'>
            <Form.Item
              label='Start Date'
              name='startDate'
              className='w-1/2'
              rules={[
                {
                  required: true,
                  message: renderError('Please select Start Date')
                }
              ]}
            >
              <DatePicker
                format='DD-MM-YYYY'
                disabledDate={(current) => {
                  return current && current < dayjs().startOf('day');
                }}
                placeholder='Start Date'
                className='w-full'
              />
            </Form.Item>

            <Form.Item
              label='End Date'
              name='endDate'
              className='w-1/2'
              dependencies={['startDate']}
              rules={[
                {
                  required: true,
                  message: renderError('Please select End Date')
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const start = getFieldValue('startDate');
                    if (!value || !start) return Promise.resolve();

                    const e = dayjs(value).startOf('day').valueOf();
                    const s = dayjs(start).startOf('day').valueOf();

                    return e >= s
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            'End Date must be the same or after Start Date'
                          )
                        );
                  }
                })
              ]}
            >
              <DatePicker
                format='DD-MM-YYYY'
                disabledDate={(current) =>
                  current && current < dayjs().startOf('day')
                }
                placeholder='End Date'
                className='w-full'
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>

      {/* trigger button */}
      <div className='flex justify-end'>
        <Button
          className='!bg-[#01B763] !text-white !font-semibold !rounded-lg !py-5 mt-2 cursor-pointer focus:green-500'
          onClick={showModal}
        >
          <IconPlus size={16} />
          Create Project
        </Button>
      </div>

      {/* filter bar */}

      <div className='flex gap-4'>
        <div className='w-64'>
          <Input
            prefix={<IconSearch size={18} className='text-gray-400' />}
            placeholder='Search Project'
            value={filters.search}
            onChange={(e) => handleFilter('search', e)}
          />
        </div>

        <div className='w-48'>
          <Select
            placeholder='Select Status'
            mode='multiple'
            value={filters.status}
            onChange={(value) => handleFilter('status', value)}
            className='w-full'
            options={[
              {
                value: 'jack',
                label: 'Jack'
              },
              {
                value: 'lucy',
                label: 'Lucy'
              },
              {
                value: 'tom',
                label: 'Tom'
              }
            ]}
          />
        </div>

        <div className='w-48'>
          <Select
            placeholder='Role'
            mode='multiple'
            value={filters.role}
            onChange={(value) => handleFilter('role', value)}
            className='w-full'
            options={[
              {
                value: 'admin',
                label: 'Admin'
              },
              {
                value: 'member',
                label: 'Member'
              },
              {
                value: 'manager',
                label: 'Manger'
              }
            ]}
          />
        </div>
      </div>
      {/* project section */}
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
        {projects.map((proj) => (
          <div
            key={proj.key}
            className='border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition cursor-pointer'
          >
            {/* Header */}
            <div className='flex justify-between items-center mb-3'>
              <div className='flex items-center gap-2'>
                <div className='rounded-lg bg-[#45B6DA] px-2'>
                  <span className='text-[14px] text-gray-900 uppercase text-white'>
                    {proj.key}
                  </span>
                </div>
                <div>
                  <span className='text-[15px] font-semibold text-gray-600 capitalize'>
                    {proj.name}
                  </span>
                </div>
              </div>

              <div
                className={`rounded-lg text-xs px-2 py-1 ${
                  proj.status === 'active'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <span className='text-[10px] uppercase'>{proj.status}</span>
              </div>
            </div>

            {/* Dates */}
            <div className='mt-3'>
              <h4
                className={`text-xs font-semibold uppercase tracking-wide text-gray-400`}
              >
                Timeline
              </h4>

              {proj.startDate ? (
                <div className='mt-1 space-y-1'>
                  <p className='text-sm text-gray-700'>
                    <span className='font-medium '>Start Date:</span>{' '}
                    <span className='text-gray-400 font-medium'>
                      {dayjs(proj.startDate).format('DD MMM YYYY')}
                    </span>
                  </p>
                  <p className='text-sm text-gray-700'>
                    <span className='font-medium'>End Date:</span>{' '}
                    <span className='text-gray-400 font-medium'>
                      {proj.endDate
                        ? dayjs(proj.endDate).format('DD MMM YYYY')
                        : '—'}
                    </span>
                  </p>
                </div>
              ) : (
                <div className='mt-1 space-y-1'>
                  <p className='text-sm text-gray-700'>
                    <span className='font-medium '>Start Date:</span>{' '}
                    <span className='text-gray-400 font-medium'>---</span>
                  </p>
                  <p className='text-sm text-gray-700'>
                    <span className='font-medium'>End Date:</span>{' '}
                    <span className='text-gray-400 font-medium'>---</span>
                  </p>
                </div>
              )}
            </div>

            {/* Manager + Team */}
            <div className='flex items-center justify-between mt-4'>
              {renderUserWithIcon(proj.manager)}
              <span className='text-sm text-gray-600'>👥 {proj.teamSize}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Index;
