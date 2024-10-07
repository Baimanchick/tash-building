'use client';

import {   Drawer } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Socials from '@/components/Socials';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import TashBuilding from '@/public/assets/svgs/tash-building-logo.svg';
import ButtonAnimate from '@/components/ButtonAnimate';
import { CustomButton } from '@/components/Button';
import ModalApp from '@/components/ModalApp';
import { fetchNavbars } from '@/utils/fetchData';
import Footer from '@/components/Footer/Footer';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isTablet = useMediaQuery(768);
  const [headerClass, setHeaderClass] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    setIsActive(!isActive);
  };

  const showModal = () => {
      setIsModalVisible(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
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

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchNavbars().then((data: any) => {
          setItems(data);
        })
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [])

  console.log('items main', items);


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
              <CustomButton onClick={showModal} dot className="!px-[30px] !py-6 " type="primary">
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
        <div className="fixed left-1/2 z-[11] flex h-[70px] w-full -translate-x-1/2 bg-[#F5F5F5]" />

        <main>{props.children}</main>

        <Footer/>
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
          { items.map((item: any, index: number) => (
            <ul key={index}>
              {item.items.map((data: any, indexed: number) => (
                <React.Fragment key={indexed}>
                  <li className="border-b-2 border-[#DFDFDF] py-[10px] text-[30px] hover:border-primary md:px-[40px] md:text-[44px]">
                    <Link
                      href={`/${data.link}`}
                      className="text-main  hover:text-primary"
                    >
                      { data.text }
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          )) }
        </div>
        <div className="flex justify-start">
          <Socials />
        </div>
      </Drawer>
      <ModalApp handleCancel={handleCancel} isModalVisible={isModalVisible} />
    </>
  );
};

export { BaseTemplate };
