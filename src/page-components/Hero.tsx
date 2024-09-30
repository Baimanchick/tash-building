'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import ModalApp from '@/components/ModalApp';
import { fetchMainImage } from '@/utils/fetchData';

const Hero = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ mainImageContent, setMainImageContent ] = useState< any | null >(null);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };

  useEffect(() => {
    const loadMainImage = async () => {
      try {
          fetchMainImage().then((data: any) => {
             setMainImageContent(data);
          })
      } catch (error) {
          console.log('load main image error', error);
      }
    };

    loadMainImage();
  }, [])

  if (!mainImageContent) {
    return <div>Loading...</div>; 
  }

  return (
    <section className="section relative top-0 z-[11] mb-[100px] h-screen bg-cover bg-center">
      <Transition>
        { mainImageContent.map((item: any) => (
          <>
            <Image
              className="rounded-b-[40px]"
              src={item.image}
              alt="contact"
              quality="100"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className=" flex h-screen flex-col items-center justify-center gap-6 text-center">
              <h3 className="!z-10 max-w-[1100px] font-helvetica text-[44px] font-medium leading-[34px] text-white sm:text-8xl sm:leading-[80px]">
                {item.title}
              </h3>

              <div className="md:hidden">
                <ButtonAnimate>
                  <CustomButton onClick={showModal} dot className="!px-[30px] !py-6" type="primary">
                    Заказать дом
                  </CustomButton>
                </ButtonAnimate>
              </div>

            </div>
          </>  
        )) }
      </Transition>
      <ModalApp handleCancel={handleCancel} isModalVisible={isModalVisible} />
    </section>
  );
};

export { Hero };
