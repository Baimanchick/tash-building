'use client';

import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';

import type { CarouselItem } from '@/app/[locale]/(unauth)/page';
import { FeatureCardWithCover } from '@/components/FeatureCardWithCover';
import Transition from '@/components/Transition';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import cover from '@/public/assets/images/cover.png';
import cover2 from '@/public/assets/images/hero2.png';

// async function GetCarouselItems() {
//   try {
//     const resp = await fetchData(`/api/main`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//
//     if (!resp.ok) {
//       throw new Error(`HTTP error! status: ${resp.status}`);
//     }
//
//     const { data } = await resp.json();
//     console.log('Received from API:', data);
//     return data;
//   } catch (e) {
//     console.error('Error occurred while calling Location API:', e);
//     throw new Error('Error occurred while calling Location API');
//   }
// }

const mockData = {
  main_carousels: [
    {
      items: [
        {
          id: '1',
          title: 'Скорость и эффективность',
          description:
            'Построить дом из ЛСТК можно гораздо быстрее по сравнению с традиционными методами. Благодаря точной подгонке и легкости монтажа, ваш дом будет готов к заселению в кратчайшие сроки.',
          image: cover,
        },
        {
          id: '2',
          title: 'Высокая прочность и надежность',
          description:
            'Дом из ЛСТК обеспечивает прочность и надежность благодаря устойчивым стальным профилям. Эти конструкции долговечны и подходят для любых климатических условий.',
          image: cover2,
        },
      ],
    },
  ],
};

const FeaturesCarousel = () => {
  const isTablet = useMediaQuery(768);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // GetCarouselItems().then((data) =>
    //   setItems(data.main_carousels[0].items || []),
    // );

    // @ts-ignore
    setItems(mockData.main_carousels[0].items || []);
  }, []);

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
