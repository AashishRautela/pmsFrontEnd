'use client';
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';

function index() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Modal
        title='Create Project'
        centered={true}
        open={open}
        onOk={handleOk}
        okText={'Create'}
        maskClosable={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className='modal_styling'
      >
        <p>{modalText}</p>
      </Modal>
      <div className=''>
        <div className='flex justify-end'>
          <Button
            className='!bg-[#01B763] !text-white !font-semibold !rounded-lg !py-5 mt-2 cursor-pointer focus:green-500'
            onClick={showModal}
          >
            <IconPlus size={16} />
            Create Project
          </Button>
        </div>
      </div>

      <div>this is where i will show projects</div>
    </>
  );
}

export default index;
