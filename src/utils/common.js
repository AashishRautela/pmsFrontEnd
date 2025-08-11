import { ExclamationCircleOutlined } from '@ant-design/icons';
import { IconAlertTriangleFilled } from '@tabler/icons-react';

export const renderError = (message) => (
  <div className='flex items-center gap-1'>
    <IconAlertTriangleFilled
      style={{ marginRight: 4 }}
      size={17}
      color='#c40a0c'
    />
    <span style={{ fontSize: '12px' }}>{message}</span>
  </div>
);
