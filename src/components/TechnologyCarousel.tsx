'use client';

import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import image1 from '@/public/assets/images/image1.png';
import image2 from '@/public/assets/images/image2.png';
import image3 from '@/public/assets/images/image3.png';
import image4 from '@/public/assets/images/image4.png';

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: 'auto',
  textAlign: 'center',
  marginInline: '10px',
};
const TechnologyCarousel = () => {
  const isTablet = useMediaQuery(768);
  return (
    <Carousel
      style={{ maxWidth: '1300px', margin: '20px auto' }}
      className="bg-[#F5F5F5]"
      dots={false}
      centerPadding="10px"
      centerMode
      draggable
      slidesToShow={isTablet ? 2 : 4}
      slidesToScroll={1}
    >
      <div>
        <div
          className={isTablet ? 'h-[400px]' : 'h-[600px]'}
          style={contentStyle}
        >
          <Image src={image1} objectFit="cover" alt="image" />
        </div>
      </div>{' '}
      <div>
        <div
          className={isTablet ? 'h-[400px]' : 'h-[600px]'}
          style={contentStyle}
        >
          <Image src={image2} objectFit="cover" alt="image" />
        </div>
      </div>{' '}
      <div>
        <div
          className={isTablet ? 'h-[400px]' : 'h-[600px]'}
          style={contentStyle}
        >
          <Image src={image3} objectFit="cover" alt="image" />
        </div>
      </div>{' '}
      <div>
        <div
          className={isTablet ? 'h-[400px]' : 'h-[600px]'}
          style={contentStyle}
        >
          <Image src={image4} objectFit="cover" alt="image" />
        </div>
      </div>
    </Carousel>
  );
};

export default TechnologyCarousel;
