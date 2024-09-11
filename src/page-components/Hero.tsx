'use client';

import Image from 'next/image';
import React from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import hero from '@/public/assets/images/hero.png';

const Hero = ({ text }: { text?: string }) => {
  return (
    <section className="section relative top-0 z-[11] mb-[100px] h-screen bg-cover bg-center">
      <Transition>
        <Image
          className="rounded-b-[40px]"
          src={hero}
          alt="contact"
          quality="100"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className=" flex h-screen flex-col items-center justify-center gap-6 text-center">
          <h3 className="!z-10 max-w-[1100px] font-helvetica text-[44px] font-medium leading-[34px] text-white sm:text-8xl sm:leading-[80px]">
            {text}
          </h3>

          <ButtonAnimate>
            <CustomButton dot className="!px-[30px] !py-6" type="primary">
              Заказать дом
            </CustomButton>
          </ButtonAnimate>
        </div>
      </Transition>
    </section>
  );
};

export { Hero };
