import { IconAlertTriangleFilled } from '@tabler/icons-react';
import toast from 'react-hot-toast';

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

export const handleErrorResponse = (error) => {
  debugger;
  toast.error(error.response.data.message || error.message);
};
export const renderUserWithIcon = (user) => {
  // Get initials (first letter of firstName + first letter of lastName if available)
  const initials =
    user?.firstName && user?.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`
      : user?.firstName
        ? user.firstName[0]
        : '';

  return (
    <div className='flex items-center gap-1'>
      <div
        className='w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] uppercase'
        style={{ backgroundColor: user.profileColor }}
      >
        <span className='text-[11px]'>{initials}</span>
      </div>
      <span className='text-sm text-gray-700'>
        {user.firstName} {user.lastName || ''}
      </span>
    </div>
  );
};
