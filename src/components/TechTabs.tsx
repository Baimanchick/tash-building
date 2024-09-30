'use client';

import { Tabs } from 'antd';
import Image from 'next/image';
import React from 'react';

import StyledText from '@/components/StyledText';
import LstkImage1 from '@/public/assets/images/img12.1.webp';
import LstkImage2 from '@/public/assets/images/img12.webp';
import tepImage2 from '@/public/assets/images/img13.1.png';
import tepImage1 from '@/public/assets/images/img13.png';
import AdvImage1 from '@/public/assets/images/img14.1.png';
import AdvImage2 from '@/public/assets/images/img14.png';

const items = [
  {
    title: 'О технологии ЛСТК',
    image1: LstkImage1,
    image2: LstkImage2,
    imageDesc:
      'Данная технология была разработана в 50-х годах 20 столетия в Канаде. Основной причиной появления данной технологии явилась необходимость в возведении большого количества малоэтажных домов для среднего класса, соответствующих климатическим условиям страны. ',
    desc: 'Термин ЛСТК используется, прежде всего, для обозначения технологии строительства зданий с использованием стальных профилей. Основой для зданий, возводимых по этой технологии, служат металлические профили разного сечения',
  },
  {
    title: 'Утеплитель',
    image2: tepImage2,
    image1: tepImage1,
    imageDesc:
      'Покрытие для крыши на основе базальта, укладываемое с помощью огня, отличается высокой прочностью и долговечностью. Оно обеспечивает отличную защиту от атмосферных воздействий и имеет превосходные теплоизоляционные свойства.',
    desc: 'В качестве утеплителя используется вата на основе базальтового волокна, уложенная в металлический каркас, напыляемый пенополиуретан, заливаемый пенобетон. Внутренняя  и внешняя отделка позволяет использовать любые современные материалы.',
  },
  {
    title: 'Характеристики',
    image1: AdvImage2,
    image2: AdvImage1,
    imageDesc:
      'Прогрессивная технология ЛСТК позволяет быстро и эффективно строить здания самого различного назначения: частные дома до 3 этажей, а также многоэтажные здания с применением различных типов каркаса. Использование технологии ЛСТК позволяет строить абсолютно разные по своему функциональному назначению объекты.',
    desc: 'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 150 м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const TechTabs = () => {
  return (
    <Tabs
      className="!m-auto !max-w-[1360px] !px-6"
      onChange={onChange}
      type="card"
      hideAdd={true}
      tabBarStyle={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
      items={items.map(({ title, desc, image1, image2, imageDesc }, i) => {
        const id = String(i + 1);
        // @ts-ignore
        return {
          label: title,
          key: id,
          children: (
            <div>
              <StyledText textItem={desc} />
              {image1 && image2 && (
                <div className="mt-6 flex items-start gap-5">
                  <div className="max-w-[453px]">
                    <Image
                      src={image1}
                      width={453}
                      height={453}
                      alt={imageDesc}
                    />
                    <p className="mt-2 text-[16px] leading-[20px] text-primary-gray">
                      {imageDesc}
                    </p>
                  </div>
                  <div className="w-img-custom">
                    <Image
                      src={image2}
                      width={453}
                      height={453}
                      alt={imageDesc}
                    />
                  </div>
                </div>
              )}
            </div>
          ),
        };
      })}
    />
  );
};

export default TechTabs;
