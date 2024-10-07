'use client';

import { Button, Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Transition from '@/components/Transition';
import configHouse from '@/public/assets/images/configure-house.png';
import ArrowLink from '@/public/assets/svgs/arrow-link.svg';
import { fetchHeroCarousel } from '@/utils/fetchData';

const SolutionsCarousel: React.FC = () => {

  const [ data, setData ] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const fetchedData = await fetchHeroCarousel();
        console.log("Fetched Data:", fetchedData); // Debugging
        setData(fetchedData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log('Error loading data:', error);
        setLoading(false); // Ensure to stop loading on error
      }
    };

    loadImage();
  }, []);

  console.log('data', data);

  const slider = useRef<CarouselRef | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    if (slider.current) {
      slider.current.goTo(index);
      setCurrentSlideIndex(index);
    }
  };

  return (
    loading ? (
      <div>Loading...</div>
    ) : (
      data.length > 0 && data[0].carousels ? (
        <Transition duration={1.2}>
          <div className="relative mx-auto mb-[60px]  max-w-[1360px] !rounded-[20px] px-4 md:my-[100px] md:px-0">
            <div className="md:margin-auto left-1/2 top-4 !z-10 flex items-center justify-center gap-2 p-4 md:absolute md:-translate-x-1/2">
              { data[0].carousels.map((item: any, index: any) => {
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
              {data[0].carousels.map((item: any) => (
                <div key={item.id}>
                  <Image
                    src={item.image}
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
      ) : (
        <div>no data...</div>
      )
    )
  );
};

export { SolutionsCarousel };
