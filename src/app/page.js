import React from 'react';
import { Form } from 'antd';
function page() {
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

        <div className='w-[60%]'>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default page;
