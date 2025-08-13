'use client';
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import {
  IconBrandGithubFilled,
  IconLock,
  IconMail,
  IconUser
} from '@tabler/icons-react';
import { renderError } from '@/utils/common.js';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function page() {
  const [tab, setTab] = useState('signIn');
  const router = useRouter();

  const handleSwitchTab = (tab) => {
    setTab(tab);
  };
  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DEV_APIS_URI}/api/v1/auth/login`,
        {
          ...values
        }
      );

      router.push('/projects');
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <>
      <div className='flex w-[100%] auth-form'>
        <div
          className='w-[40%] h-screen'
          style={{
            background:
              'linear-gradient(to bottom right, #fbe3a8, #d8d8b8, #d3eaf2, #92d7f7, #c8e6f3)'
          }}
        >
          left
        </div>

        <div className='w-[60%] flex items-center justify-center'>
          <div className='w-[50%] flex justify-center items-center flex-col'>
            {/* top logo */}
            <div className='logo flex gap-2 items-center'>
              <img src='./assets/logo.png' height={23} width={40} />
              <h1 className='text-4xl font-bold text-[#273B49]'>Techspire</h1>
            </div>

            {/* tab section */}
            <div className='bg-[#F3F5F7] w-[100%] rounded-lg mt-5 flex px-1 py-1 gap-2'>
              <div
                className={`rounded-lg ${tab === 'signIn' ? 'bg-[#FEFEFE] shadow-sm' : 'text-[#6C7275]'} w-[50%] text-center text-[14px] py-2 cursor-pointer transition-colors duration-300 ease-in-out font-semibold`}
                onClick={() => handleSwitchTab('signIn')}
              >
                Sign in
              </div>

              <div
                className={`rounded-lg ${tab === 'signUp' ? 'bg-[#FEFEFE] shadow-sm' : 'text-[#6C7275]'} w-[50%] text-center text-[14px] py-2 cursor-pointer transition-colors duration-300 ease-in-out font-semibold`}
                onClick={() => handleSwitchTab('signUp')}
              >
                Create Account
              </div>
            </div>

            {/* sso */}
            <div className='w-[100%] mt-4 flex flex-col gap-2'>
              <div className='bg-[#F3F5F7] w-[100%] rounded-lg  flex px-1 py-1'>
                <div
                  className={`rounded-lg flex font-semibold bg-[#FEFEFE] text-[#232627] w-[100%] justify-center items-center text-[14px] py-2 cursor-pointer transition-colors duration-300 ease-in-out hover:shadow-sm`}
                >
                  <img
                    src='./assets/googleLogo.png'
                    style={{ height: '23px' }}
                  />
                  <span>Continue with Google</span>
                </div>
              </div>

              <div className='bg-[#F3F5F7] w-[100%] rounded-lg flex px-1 py-1'>
                <div
                  className={`rounded-lg gap-1 flex justify-center items-center font-semibold bg-[#FEFEFE] text-[#232627] w-[100%] text-center text-[14px] py-2 cursor-pointer transition-colors duration-300 ease-in-out hover:shadow-sm`}
                >
                  <IconBrandGithubFilled size={20} />{' '}
                  <span>Continue with Github</span>
                </div>
              </div>
            </div>

            {/* line */}
            <div className='flex mt-4 items-center text-[#6C7275] text-[12px] w-full'>
              <div className='flex-1 h-px bg-[#6C7275]'></div>
              <span className='px-2'>OR</span>
              <div className='flex-1 h-px bg-[#6C7275]'></div>
            </div>

            {/* form section */}
            <div className='w-full mt-4'>
              {tab === 'signIn' ? (
                <Form layout='vertical' className='w-full' onFinish={onFinish}>
                  <Form.Item
                    name='email'
                    className='!mb-2'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter email')
                      }
                    ]}
                  >
                    <Input
                      prefix={<IconMail size={18} className='text-gray-400' />}
                      type='email'
                      placeholder='Email'
                      className='!bg-[#F3F5F7] !border-none !font-semibold !px-3 !py-2 focus:!border-[#4bd657]'
                    />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    className='!mb-3'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter password')
                      }
                    ]}
                  >
                    <Input.Password
                      prefix={<IconLock size={18} className='text-gray-400' />}
                      placeholder='Password'
                      className='!bg-[#F3F5F7] !border-none !font-semibold !px-3 !py-2 focus:!border-[#4bd657]'
                    />
                  </Form.Item>

                  <Button
                    type='primary'
                    htmlType='submit'
                    className='!bg-[#01B763] !text-white w-full !font-semibold !rounded-lg !py-5 mt-2 cursor-pointer focus:green-500'
                  >
                    Sign In
                  </Button>
                </Form>
              ) : (
                <Form layout='vertical' className='w-full' onFinish={onFinish}>
                  <Form.Item
                    name='First Name'
                    className='!mb-3'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter First name')
                      }
                    ]}
                  >
                    <div className='relative w-full'>
                      <IconUser
                        size={18}
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                      />
                      <input
                        type='text'
                        placeholder='Enter your First name'
                        className='w-full border rounded-lg px-3 py-2 pl-10 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                      />
                    </div>
                  </Form.Item>

                  <Form.Item name='Last Name' className='!mb-3' rules={[]}>
                    <div className='relative w-full'>
                      <IconUser
                        size={18}
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                      />
                      <input
                        type='text'
                        placeholder='Enter your last name'
                        className='w-full border rounded-lg px-3 py-2 pl-10 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name='email'
                    className='!mb-3'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter email')
                      }
                    ]}
                  >
                    <div className='relative w-full'>
                      <IconMail
                        size={18}
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                      />
                      <input
                        type='email'
                        placeholder='Email'
                        className='w-full border rounded-lg px-3 py-2 pl-10 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name='password'
                    className='!mb-3'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter password')
                      }
                    ]}
                  >
                    <div className='relative w-full'>
                      <IconLock
                        size={18}
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                      />
                      <input
                        type='password'
                        placeholder='Password'
                        className='w-full border rounded-lg px-3 py-2 pl-10 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                      />
                    </div>
                  </Form.Item>

                  <Button
                    type='primary'
                    htmlType='submit'
                    className='!bg-[#01B763] !text-white w-full !font-semibold !rounded-lg !py-5 mt-2 cursor-pointer focus:green-500'
                  >
                    Create Account
                  </Button>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
