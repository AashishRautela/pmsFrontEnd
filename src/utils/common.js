import { IconAlertTriangleFilled } from '@tabler/icons-react';

export const renderError = (message) => (
  <div className='flex items-center gap-1 pl-2 mb-1'>
    <IconAlertTriangleFilled
      style={{ marginRight: 4 }}
      size={14}
      color='#c40a0c'
    />
    <span style={{ fontSize: '12px' }}>{message}</span>
  </div>
);
