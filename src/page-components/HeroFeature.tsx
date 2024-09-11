'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import Transition from '@/components/Transition';

const HeroFeature = ({ image }: { image: StaticImageData }) => {
  return (
    <Transition duration={2}>
      <section className="md:pt-[100px]">
        <div className="relative left-0 top-0 m-auto h-screen max-h-[800px] w-full rounded-b-[40px]">
          <Image
            className="rounded-t-[40px]"
            src={image}
            alt="hero"
            quality="100"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </Transition>
  );
};

export { HeroFeature };
