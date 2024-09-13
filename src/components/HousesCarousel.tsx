'use client';

import { Carousel } from 'antd';
import Image from 'next/image';
import React, { useRef } from 'react';
import Arrow from '@/public/assets/svgs/arrow.svg';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  borderRadius: '20px',
  height: '100%',
  maxHeight: '100%', 
};


const HousesCarousel = ({ houses }: any) => {
  const carouselRef = useRef<any>(null);  
  const isTablet = useMediaQuery(768);


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
        {houses?.map((house: any, id: number) => (
            <div key={id} style={contentStyle}>
              {isTablet ? (
                <Image
                  className="rounded-[20px] min-h-[250px] max-h-[250px] object-cover"
                  src={house.image}
                  alt={house.title}
                  layout="responsive"
                  objectPosition="center"
                  width={1360}
                  height={300}
                  quality={100}
                />
              ) : (
              <Image
                  className="rounded-[20px] min-h-[600px] max-h-[600px] object-cover"
                  src={house.image}
                  alt={house.title}
                  layout="responsive"
                  objectPosition="center"
                  width={1360}
                  height={600}
                  quality={100}
              />
              )}

            </div>
        ))}
      </Carousel>
    </div>
  );
};

export { HousesCarousel };
