import Header from '@/componants/common/header.js';
import SideBar from '../../componants/common/sideBar.js';

export default function HeaderOnlyLayout({ children }) {
  return (
    <div className=' flex flex-col'>
      <Header />
      <div className='flex'>
        <SideBar />
        <main className='flex-1 pr-6 pl-16 pt-14 pb-2 overflow-y-scroll h-[calc(100vh-6px)]'>
          {children}
        </main>
      </div>
    </div>
  );
}
