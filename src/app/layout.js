import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';
import { ConfigProvider } from 'antd';
import ReduxProvider from '@/store/reduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'TechSpire',
  description: 'PMS'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#01B763',
                borderRadius: 8,
                colorBgContainer: '#f6ffed'
              },
              components: {
                Button: {
                  defaultBg: 'transparent',
                  defaultHoverBg: 'transparent',
                  defaultActiveBg: 'transparent',

                  defaultBorderColor: '#d9d9d9',
                  defaultHoverBorderColor: '#01B763',
                  defaultActiveBorderColor: '#019b55',
                  defaultColor: 'rgba(0,0,0,0.88)'
                },
                Modal: {
                  headerBg: '#01B763',
                  titleColor: '#fff',
                  borderRadiusLG: 12
                },
                Slider: {
                  defaultBg: '#01B763'
                },
                DatePicker: {
                  defaultBg: '#fff',
                  colorBgContainer: '#fff',
                  activeBg: '#fff',
                  hoverBg: '#fff'
                }
              }
            }}
          >
            <ReduxProvider>{children}</ReduxProvider>
          </ConfigProvider>
        </AntdRegistry>

        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000
          }}
        />
      </body>
    </html>
  );
}
