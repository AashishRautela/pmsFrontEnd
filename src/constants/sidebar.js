import {
  IconLayoutGrid,
  IconListDetails,
  IconSettings,
  IconUser,
  IconBell,
  IconChartBar,
  IconMessage,
  IconCalendar,
  IconFileText,
  IconShoppingCart,
  IconTag,
  IconLock,
  IconCreditCard,
  IconGlobe,
  IconHelp,
  IconDatabase,
  IconPackage,
  IconBriefcase,
  IconStar,
  IconHeart
} from '@tabler/icons-react';

import Link from 'next/link';

export const sideBarItems = [
  {
    key: 'dashboard',
    icon: <IconLayoutGrid size={18} />,
    label: <Link href='/dashboard'>Dashboard</Link>
  },
  {
    key: 'issues',
    icon: <IconListDetails size={18} />,
    label: <Link href='/issues'>Issues</Link>
  },
  {
    key: 'settings',
    icon: <IconSettings size={18} />,
    label: <Link href='/settings'>Settings</Link>
  },
  {
    key: 'profile',
    icon: <IconUser size={18} />,
    label: <Link href='#'>Profile</Link>
  },
  {
    key: 'notifications',
    icon: <IconBell size={18} />,
    label: <Link href='#'>Notifications</Link>
  },
  {
    key: 'reports',
    icon: <IconChartBar size={18} />,
    label: <Link href='#'>Reports</Link>
  },
  {
    key: 'messages',
    icon: <IconMessage size={18} />,
    label: <Link href='#'>Messages</Link>
  },
  {
    key: 'calendar',
    icon: <IconCalendar size={18} />,
    label: <Link href='#'>Calendar</Link>
  },
  {
    key: 'documents',
    icon: <IconFileText size={18} />,
    label: <Link href='#'>Documents</Link>
  },
  {
    key: 'orders',
    icon: <IconShoppingCart size={18} />,
    label: <Link href='#'>Orders</Link>
  },
  {
    key: 'products',
    icon: <IconTag size={18} />,
    label: <Link href='#'>Products</Link>
  },
  {
    key: 'security',
    icon: <IconLock size={18} />,
    label: <Link href='#'>Security</Link>
  },
  {
    key: 'billing',
    icon: <IconCreditCard size={18} />,
    label: <Link href='#'>Billing</Link>
  },
  {
    key: 'global',
    icon: <IconGlobe size={18} />,
    label: <Link href='#'>Global</Link>
  },
  {
    key: 'help',
    icon: <IconHelp size={18} />,
    label: <Link href='#'>Help Center</Link>
  },
  {
    key: 'database',
    icon: <IconDatabase size={18} />,
    label: <Link href='#'>Database</Link>
  },
  {
    key: 'packages',
    icon: <IconPackage size={18} />,
    label: <Link href='#'>Packages</Link>
  },
  {
    key: 'careers',
    icon: <IconBriefcase size={18} />,
    label: <Link href='#'>Careers</Link>
  },
  {
    key: 'favorites',
    icon: <IconStar size={18} />,
    label: <Link href='#'>Favorites</Link>
  },
  {
    key: 'likes',
    icon: <IconHeart size={18} />,
    label: <Link href='#'>Likes</Link>
  }
];
