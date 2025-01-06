'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import { fetchMainImage } from '@/utils/fetchData';
import ButtonModal from '@/components/ButtonModal';

const Hero = () => {
  const [ mainImageContent, setMainImageContent ] = useState< any | null >(null);


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
        { mainImageContent.map((item: any, id: number) => (
          <React.Fragment key={id}>
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
                  <ButtonModal/>
                </ButtonAnimate>
              </div>

            </div>
          </React.Fragment>  
        )) }
      </Transition>
    </section>
  );
};

export { Hero };
