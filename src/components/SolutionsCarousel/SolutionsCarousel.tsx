'use client';

import { Button, Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import Transition from '@/components/Transition';
import configHouse from '@/public/assets/images/configure-house.png';
import firstSolution from '@/public/assets/images/solution.webp';
import secondSolution from '@/public/assets/images/solution1.webp';
import thirdSolution from '@/public/assets/images/solution2.webp';
import ArrowLink from '@/public/assets/svgs/arrow-link.svg';
const items = [
  { id: 1, title: 'Микея 1', size: '170 кв.м.', imgSrc: firstSolution },
  { id: 2, title: 'Микея 2', size: '190 кв.м.', imgSrc: secondSolution },
  { id: 3, title: 'Микея 3', size: '280 кв.м.', imgSrc: thirdSolution },
];
const SolutionsCarousel: React.FC = () => {
  const slider = useRef<CarouselRef | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    if (slider.current) {
      slider.current.goTo(index);
      setCurrentSlideIndex(index);
    }
  };

  return (
    <Transition duration={1.2}>
      <div className="relative mx-auto mb-[60px]  max-w-[1360px] !rounded-[20px] px-4 md:my-[100px] md:px-0">
        <div className="md:margin-auto left-1/2 top-4 !z-10 flex items-center justify-center gap-2 p-4 md:absolute md:-translate-x-1/2">
          {items.map((item, index) => {
            return (
              <Button
                key={item.id}
                className={`!rounded-[12px] !py-[36px] hover:!border-primary hover:!text-primary  sm:!px-[30px] sm:!py-[36px] ${currentSlideIndex === index ? '!text-black' : '!text-primary-gray'}`}
                size="large"
                onClick={() => handleSlideChange(index)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[24px]">{item.title}</span>
                  <span className="text-[16px]">{item.size}</span>
                </div>
              </Button>
            );
          })}
        </div>
        <Carousel
          ref={slider}
          className=""
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {items.map((item) => (
            <div key={item.id}>
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="responsive"
                width={1360}
                height={760}
                className="rounded-[20px]"
              />
            </div>
          ))}
        </Carousel>
        <div className="bottom-8 left-1/2 flex w-full items-center justify-center md:absolute md:mt-[50px] md:-translate-x-1/2">
          <div className="my-2 flex w-[400px] items-center gap-2">
            <div className="flex h-[70px] flex-1 flex-col justify-around break-words rounded-2xl bg-[white] p-[10px] text-[14px] leading-[14px] md:p-[15px]">
              Хотите уникальный дом?
              <br />
              <Link href="individual" className="text-primary">
                Узнать больше
              </Link>
            </div>
            <div className="flex h-[70px] flex-1 flex-col items-center justify-center rounded-2xl bg-[white] p-[10px] text-[14px] md:flex-row md:gap-2 md:p-[15px]">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Image
                className="hidden md:block"
                src={configHouse}
                alt="config house"
                quality={100}
                height={48}
                width={48}
              />
              <Link href="individual" className="leading-[14px] text-primary">
                Собрать <br /> конфигурацию
                <span className="ml-2 inline-block">
                  <ArrowLink className="size-[14px] fill-primary" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export { SolutionsCarousel };
