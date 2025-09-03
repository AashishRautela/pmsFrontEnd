import { IconBell, IconLogout, IconUser } from '@tabler/icons-react';
import React from 'react';

function header() {
  return (
    <>
      <div className='py-4 px-6 bg-gradient-to-r from-[#01B763] via-[#00a85a] to-[#019e57] flex justify-between fixed w-full z-10 shadow-md'>
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
