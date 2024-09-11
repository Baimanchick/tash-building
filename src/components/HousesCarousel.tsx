'use client';

import { Carousel } from 'antd';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useRef } from 'react';
import Arrow from '@/public/assets/svgs/arrow.svg';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  borderRadius: '20px',
  height: '100%',
  maxHeight: '100%', // Make sure height adapts to the square shape
};

type House = {
  id: number;
  title: string;
  description: string;
  imgSrc: string | StaticImageData;
};

const HousesCarousel = ({ houses }: { houses: House[] }) => {
  const carouselRef = useRef<any>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-[40%] top-[75%] z-10 hidden items-center gap-4 md:flex">
        <button
          onClick={handlePrev}
          className="flex h-[60px] w-[60px] items-center justify-center rounded-[24px] bg-[#FFFFFFD6]"
        >
          <i className="rotate-180">
            <Arrow />
          </i>
        </button>
        <button
          onClick={handleNext}
          className="flex h-[60px] w-[60px] items-center justify-center rounded-[24px] bg-[#FFFFFFD6]"
        >
          <i>
            <Arrow />
          </i>
        </button>
      </div>

      <Carousel
        ref={carouselRef}
        focusOnSelect={false}
        pauseOnFocus={false}
        dots={false}
        touchMove
        draggable
        className="rounded-[20px] square-carousel"
      >
        {houses?.map((house) => (
            <div style={contentStyle}>
              <Image
                className="rounded-[20px] min-h-[600px] max-h-[600px]"
                src={house.imgSrc}
                alt={house.title}
                layout="responsive"
                quality={100}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
        ))}
      </Carousel>
    </div>
  );
};

export { HousesCarousel };
