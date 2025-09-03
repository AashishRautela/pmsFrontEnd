'use client';

import React, { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import { sideBarItems } from '@/constants/sidebar';

export default function SideBar() {
  const [seletectKey, setSelectedKey] = useState('');
  console.log('seletectKey-->', seletectKey);

  const siderStyle = {
    overflow: 'auto',
    height: 'calc(100vh - 60px)',
    width: '130%',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'none',
    scrollbarGutter: 'stable',
    backgroundColor: 'white',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
    boxShadow: '6px 0 4px -7px #999, -6px 0 4px -4px'
  };

  useEffect(() => {
    const key = localStorage.getItem('seletedKey');
    if (key) {
      setSelectedKey(key);
    } else {
      setSelectedKey('dashboard');
    }
  }, []);

  const onSelect = (item) => {
    console.log('item-->', item.key);
    localStorage.setItem('seletedKey', item.key);
  };

  return (
    <div className='pt-14'>
      <Menu
        theme='light'
        mode='inline'
        items={sideBarItems}
        style={siderStyle}
        defaultSelectedKeys={[seletectKey]}
        className='custom-menu'
        onSelect={onSelect}
      />
    </div>
  );
}
