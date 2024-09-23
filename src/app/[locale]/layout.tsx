import '@/styles/global.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: 'Строительная компания Tash Building | Построить дом, Купить дом',
  description: 'Tash Building – строительная компания, которая поможет вам построить дом мечты или купить готовый дом. Полный спектр услуг: проектирование, строительство под ключ и продажа домов.',
  keywords: 'построить дом, купить дом, строительная компания, строительство коттеджей, строительство домов, строительство под ключ, современные дома, частные дома',
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
      <title>Строительная компания Tash Building | Построить дом, Купить дом</title>
      <meta name="description" content="Tash Building – строительная компания, которая поможет вам построить дом мечты или купить готовый дом." />
      <meta name="keywords" content="построить дом, купить дом, строительная компания, строительство коттеджей, строительство домов, строительство под ключ, современные дома, частные дома" />
      <meta name="robots" content="index, follow" />
      
      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XBS4DRTPML"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XBS4DRTPML');
        `}
      </script>
      {/* End Google Tag Manager */}

      <body className="bg-[#F5F5F5] font-helvetica">
        <AntdRegistry>{props.children}</AntdRegistry>
      </body>
    </html>
  );
}