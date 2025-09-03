'use client';
import { Button, Modal, Form, Input, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { renderError } from '@/utils/common';
import dayjs from 'dayjs';
import axios from 'axios';

function Index() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submittable, setSubmittable] = useState(false);

  // watch all fields
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
      debugger;
      const backend = process.env.NEXT_PUBLIC_DEV_APIS_URI;
      const response = await axios.post(`${backend}/api/v1/project`, payload, {
        withCredentials: true
      });

      console.log('✅ API Response:', response.data);

      // Success actions
      setOpen(false);
      form.resetFields();
    } catch (error) {
      console.error('❌ API Error:', error.response?.data || error.message);
    } finally {
      setConfirmLoading(false);
    }
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

      <div>this is where i will show projects</div>
    </>
  );
}

export default Index;
