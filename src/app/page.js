'use client';
import React, { useState } from 'react';
import { Form } from 'antd';
import {
  IconAlertTriangleFilled,
  IconBrandGithubFilled
} from '@tabler/icons-react';
import { renderError } from '@/utils/common.js';
function page() {
  const [tab, setTab] = useState('signIn');

  const handleSwitchTab = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <div className='flex w-[100%]'>
        <div
          className='w-[40%] h-screen'
          style={{
            background: `
    radial-gradient(circle at 60% 10%, #90dffe 25%, transparent 60%),
    radial-gradient(circle at 20% 80%, #b7ffea 20%, transparent 60%),
    radial-gradient(circle at 80% 30%, #a0c4ff 30%, transparent 70%),
    radial-gradient(circle at 70% 80%, #faaca8 15%, transparent 60%),
    linear-gradient(120deg, #fdcbf1 0%, #a0c4ff 100%)
  `,
            backgroundBlendMode: 'lighten',
            filter: 'blur(0.5px)'
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
                <Form layout='vertical' className='w-full'>
                  <Form.Item
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter email')
                      }
                    ]}
                  >
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: renderError('Please Enter password')
                      }
                    ]}
                  >
                    <input
                      type='password'
                      placeholder='Enter your password'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <button
                    type='submit'
                    className='bg-[#01B763] text-white w-full rounded-lg py-2 mt-2'
                  >
                    Sign in
                  </button>
                </Form>
              ) : (
                <Form layout='vertical' className='w-full'>
                  <Form.Item name='First Name' rules={[{ required: true }]}>
                    <input
                      type='text'
                      placeholder='Enter your first name'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <Form.Item name='Last Name' rules={[{ required: true }]}>
                    <input
                      type='text'
                      placeholder='Enter your last name'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <Form.Item name='Email' rules={[{ required: true }]}>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <Form.Item name='password' rules={[{ required: true }]}>
                    <input
                      type='Password'
                      placeholder='Enter password'
                      className='w-full border rounded-lg px-3 py-2 text-sm outline-none bg-[#F3F5F7] border-none font-semibold'
                    />
                  </Form.Item>

                  <button
                    type='submit'
                    className='bg-[#01B763] text-white w-full rounded-lg py-2 mt-2'
                  >
                    Create account
                  </button>
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
