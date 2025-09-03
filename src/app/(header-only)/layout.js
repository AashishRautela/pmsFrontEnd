import Header from '@/componants/common/header.js'; // your path

export default function HeaderOnlyLayout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 p-6 pt-14'>{children}</main>
    </div>
  );
}
