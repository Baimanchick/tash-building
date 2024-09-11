import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import Image from 'next/image';
import React from 'react';

import type { CarouselItem } from '@/app/[locale]/(unauth)/page';

const FeatureCardWithCover = ({
  item,
  index,
}: {
  item: CarouselItem;
  index: number;
}) => {
  return (
    <Card
      cover={
        <Image
          src={item.image}
          alt={item.title}
          width={590}
          height={530}
          quality={100}
          objectFit="cover"
          objectPosition="center"
        />
      }
      bordered={false}
      style={{
        width: 'auto',
        maxWidth: 800,
        borderRadius: '20px',
      }}
      classNames={{
        extra: '!m-0',
        header: '!border-0',
        body: '!pb-[20px] !pt-[10px] md:!pt-[10px] !py-[20px]',
        cover: 'rounded-[20px]',
      }}
    >
      <Meta
        className="font-inter"
        title={
          <div className="flex items-center justify-between">
            <h3 className="text-wrap text-left text-[26px] font-normal leading-[26px] md:max-w-[400px] md:text-[40px] md:leading-10">
              {item.title}
            </h3>

            <div className="mt-[20px] hidden size-10 items-center justify-center self-start rounded-full bg-primary font-inter text-[20px] font-normal uppercase text-white md:flex md:size-11 md:text-[24px]">
              {`0${index}`}
            </div>
          </div>
        }
        description={
          <p className="truncate-ellipsis max-w-[400px] break-words text-left text-base leading-[16px]">
            {item.description}
          </p>
        }
      />
    </Card>
  );
};

export { FeatureCardWithCover };
