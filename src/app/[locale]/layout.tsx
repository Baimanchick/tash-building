import '@/styles/global.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  return (
    <html lang={props.params.locale}>
      <body className="bg-[#F5F5F5] font-helvetica">
        <AntdRegistry>{props.children}</AntdRegistry>
      </body>
    </html>
  );
}
