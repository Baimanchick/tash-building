'use client';

import { Carousel, Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Transition from '@/components/Transition';
import Arrow from '@/public/assets/svgs/arrow.svg';
import { useHouse } from '@/hooks/useHouse';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  borderRadius: '20px',
  height: '100%',
  maxHeight: '55vh',
};

const Houses = () => {
  const carouselRef = useRef<any>(null);
  const [current, setCurrent] = useState<number>(0); 
  const { house, pathname } = useHouse();   

  const houses = house.house || []; 

  const onChange = (currentSlide: number) => {
    setCurrent(currentSlide);
  };

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

  const getCurrentHouse = () => {
    if (houses.length === 0) return null;

    const houseIndex = current % houses.length;
    return houses[houseIndex];
  };

  const currentHouse = getCurrentHouse();

  return (
    <Transition duration={1.5}>
      <section className="relative m-auto my-[70px] mb-[100px] w-screen max-w-[1360px]">
        <h3 className="text-start text-[33px] text-black md:text-start  md:text-[64px]">
          Made by&nbsp;
          <span className="font-corporate text-primary">tash.building</span>
        </h3>
        <Divider style={{ borderColor: '#101010' }} />
        <div className='house_title_and_des'>
          <Transition key={current}>
            <div className="mb-[40px] flex flex-col items-start justify-between px-3 md:flex-row md:items-start md:p-0">
              <h3 className="text-[44px]">{currentHouse?.title ?? 'Default'}</h3>
              <p className="max-w-[680px] text-[24px] leading-[26px]">
                {currentHouse?.description ?? 'Default Description'}
              </p>
            </div>
          </Transition>
        </div>

        <div className="absolute left-[50%] top-[90%] z-10 flex items-center gap-4 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="flex size-[60px] items-center justify-center rounded-[24px] bg-[#FFFFFFD6]"
          >
            <i className="rotate-180">
              <Arrow />
            </i>
          </button>
          <button
            onClick={handleNext}
            className="flex size-[60px] items-center justify-center rounded-[24px] bg-[#FFFFFFD6]"
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
          dots={true}
          touchMove
          draggable={false}
          className="rounded-[20px] "
          afterChange={onChange}
        >
          {houses.map((house: any, id: number) => (
            <Link key={id} href={`${pathname === '/individual' ? 'individual' : pathname === '/typical-houses' ? 'typical-houses' : pathname === '/commerce' ? 'commerce': null }/${house.id}`}>
              <div style={contentStyle} key={house.id}>
                <Image
                  className="rounded-[20px] image_houses"
                  src={house.images[0]} 
                  alt={house.title}
                  width={1360}
                  height={600}
                  quality={100}
                />
              </div>
            </Link>
          ))}
        </Carousel>
      </section>
    </Transition>
  );
};

export { Houses };
