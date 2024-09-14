'use client';

import { Col, Drawer, Row } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Socials from '@/components/Socials';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import TashBuilding from '@/public/assets/svgs/tash-building-logo.svg';
import ButtonAnimate from '@/components/ButtonAnimate';
import { CustomButton } from '@/components/Button';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isTablet = useMediaQuery(768);

  const [headerClass, setHeaderClass] = useState('');
  const [isActive, setIsActive] = useState(false);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    setIsActive(!isActive);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(
        '.section',
      ) as HTMLElement | null;
      const firstSectionHeight = firstSection?.offsetHeight || null;
      if (!firstSectionHeight) return;
      if (window.scrollY >= firstSectionHeight) {
        setHeaderClass('styled-logo');
      } else {
        setHeaderClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/') setHeaderClass('styled-logo');
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="w-full text-gray-700 antialiased">
        <header className="fixed left-1/2 z-[12] flex h-[70px] w-screen max-w-[1360px] -translate-x-1/2 justify-between p-1 px-5">
          <div className="flex items-center justify-center">
            <Link href="/">
              <TashBuilding className={headerClass} />{' '}
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="base_template_button_desk">
            <ButtonAnimate>
              <CustomButton dot className="!px-[30px] !py-6 " type="primary">
                Заказать дом
              </CustomButton>
            </ButtonAnimate>
            </div>
            <div className="flex items-center gap-10 justify-center">
              <div className="flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="relative flex size-12 cursor-pointer items-center justify-center rounded-[20px] bg-white"
                  onClick={() => showDrawer()}
                >
                  <span className="absolute block h-0.5 w-5 -translate-y-1 bg-gray-800 transition-transform  duration-200" />
                  <span className="absolute block h-0.5 w-5 translate-y-1 bg-gray-800 transition-transform  duration-200" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="fixed left-1/2 z-[11] flex h-[70px] w-screen -translate-x-1/2 bg-[#F5F5F5]" />

        <main>{props.children}</main>

        <footer className="m-auto max-w-[1360px] text-center text-sm md:pt-8">
          <Row
            align="middle"
            justify="center"
            gutter={[0, 20]}
            className="mb-[20px] md:mb-0"
          >
            <Col md={5} xs={24}>
              <a
                href="https://wa.me/message/6SKVNNWYVYDOB1"
                className="text-primary-gray underline decoration-primary underline-offset-4 hover:text-primary"
                target="_blank"
                rel="noopener"
              >
                Написать в WhatsApp
              </a>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col items-center font-helvetica">
                <h4 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[60px]">
                  +996 777-222-220
                </h4>
                <h4 className="font-corporate text-[36px] leading-[30px] text-primary md:text-[64px] md:leading-[60px]">
                  info@tash.building
                </h4>
              </div>
            </Col>
            <Col md={5} xs={24}>
              <a
                href="https://web.telegram.org/"
                className="text-primary-gray underline decoration-primary underline-offset-4 hover:text-primary"
                target="_blank"
                rel="noopener"
              >
                Написать в Телеграмм
              </a>
            </Col>
          </Row>
          <Row gutter={[0, 20]} className="my-[50px]">
            <Col md={8} xs={24}>
              <div className="md:text-left">
                ©{new Date().getFullYear()} Все права защищены.
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className="text-black">
                Адрес: <br />
                <span className="text-primary-gray">
                  г.Бишкек, Баялинова 17/4
                </span>
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className="md:text-right">Сайт сделан компанией K.Kode</div>
            </Col>
          </Row>
          <Row align="middle" justify="center" className="md:mb-[10px]">
            <Col md={24}>
              <span className="text-2xl text-primary-gray">
                Строительная компания
              </span>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="center"
            className="relative h-[150px] overflow-hidden md:h-[160px]"
          >
            <Col
              span={24}
              className="absolute bottom-[-60px] md:bottom-[-10px]"
            >
              <h2 className=" text-[60px] font-bold text-primary md:text-[220px]">
                tash.building
              </h2>
            </Col>
          </Row>
        </footer>
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        width={isTablet ? '100%' : '50vw'}
        headerStyle={{ border: 'none' }}
        style={{ background: '#F5F5F5' }}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
        closeIcon={
          <div className="flex h-screen items-center justify-center">
            <div
              className={`relative flex size-12 cursor-pointer items-center justify-center rounded-[20px] bg-white ${isActive ? 'active' : ''}`}
            >
              <span className="absolute block h-0.5 w-5 rotate-45 bg-gray-800 transition-transform  duration-200" />
              <span className="absolute block h-0.5 w-5 -rotate-45 bg-gray-800 transition-transform  duration-200" />
            </div>
          </div>
        }
      >
        <div className="flex w-full flex-col justify-between">
          <ul>
            <li className="border-b-2 border-[#DFDFDF] py-[10px] text-[30px] hover:border-primary md:px-[40px] md:text-[44px]">
              <Link
                href="/typical-houses"
                className="text-main  hover:text-primary"
              >
                Типовые дома
              </Link>
            </li>
            <li className="border-b-2 border-[#DFDFDF] py-[10px] text-[30px] hover:border-primary md:px-[40px] md:text-[44px]">
              <Link
                href="/individual"
                className=" text-main hover:text-primary"
              >
                Индивидуальные дома
              </Link>
            </li>
            <li className="border-b-2 border-[#DFDFDF] py-[10px] text-[30px] hover:border-primary md:px-[40px] md:text-[44px]">
              <Link href="commerce" className=" text-main hover:text-primary">
                Коммерческие здания
              </Link>
            </li>
            <li className="border-b-2 border-[#DFDFDF] py-[10px] text-[30px] hover:border-primary md:px-[40px] md:text-[44px]">
              <Link href="technology" className=" text-main hover:text-primary">
                Технологии
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-start">
          <Socials />
        </div>
      </Drawer>
    </>
  );
};

export { BaseTemplate };
