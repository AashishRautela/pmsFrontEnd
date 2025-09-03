import { IconBell, IconLogout, IconUser } from '@tabler/icons-react';
import React from 'react';

function header() {
  return (
    <>
      <div className='py-4 px-6 bg-[#01B763] flex justify-between fixed w-full z-10'>
        <div className='flex gap-2 items-center cursor-pointer'>
          {/* <img src='./assets/logo.png' className='bg-white-500' height={18} width={18} /> */}
          <h1 className='font-bold text-[#FFF]'>Techspire</h1>
        </div>
        <div className='flex gap-2'>
          <IconBell color='white' size={20} className='cursor-pointer' />
          <IconUser color='white' size={20} className='cursor-pointer' />
          <IconLogout color='white' size={20} className='cursor-pointer' />
        </div>
      </div>
    </>
  );
}

export default header;
