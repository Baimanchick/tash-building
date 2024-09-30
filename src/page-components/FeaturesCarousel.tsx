'use client';

import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';

import type { CarouselItem } from '@/app/[locale]/(unauth)/page';
import { FeatureCardWithCover } from '@/components/FeatureCardWithCover';
import Transition from '@/components/Transition';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { fetchAdvantagesCarousel } from '@/utils/fetchData';

const FeaturesCarousel = () => {
  const isTablet = useMediaQuery(768);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchAdvantagesCarousel().then((data: any) => {
          setItems(data);
        })
      } catch (error) {
        console.log('load image lstk error', error);
      }
    }

    loadData();
  }, [])

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: isTablet ? 'auto' : '800px',
    width: 'auto',
    textAlign: 'center',
    marginInline: '10px',
  };

  return (
    <section className="m-auto mt-[100px] max-w-[1360px]">
      <Transition>
        <Carousel
          className="bg-[#F5F5F5]"
          dots={false}
          centerPadding="30px"
          centerMode
          draggable
          slidesToShow={isTablet ? 1 : 2}
          slidesToScroll={1}
        >
          {items &&
            items.map((item: CarouselItem, index: number) => {
              return (
                <div key={item.id}>
                  <div style={contentStyle}>
                    <FeatureCardWithCover item={item} index={index + 1} />
                  </div>
                </div>
              );
            })}
        </Carousel>
      </Transition>
    </section>
  );
};

export { FeaturesCarousel };
