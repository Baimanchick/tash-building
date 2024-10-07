'use client'

import React, { useEffect, useState } from 'react';

import { SocialCard } from '@/components/SocialCard';
import Socials from '@/components/Socials';
import Transition from '@/components/Transition';
import { fetchSocialMediaContent } from '@/utils/fetchData';

const SocialsBlock = () => {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchSocialMediaContent().then((data: any) => {
          setItems(data);
        })
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [])

  console.log('items', items);

  return (
    <Transition duration={1.4}>
      <div className="m-auto mb-[100px] max-w-[1360px]">
        <h3 className="m-auto mb-[30px] max-w-[720px] px-3 text-center text-[44px] leading-[34px] text-black md:px-0 md:text-[64px] md:leading-[60px]">
          Смотрите нас в{' '}
          <span className="text-primary-gray">социальных сетях</span>
        </h3>
        <Socials />
        <div className="flex flex-col items-center gap-1 px-3 md:flex-row">
          { items.map((item: any) => (
            <SocialCard
              link={item.link}
              image={item.image}
              text={item.text}
            />
          )) }
        </div>
      </div>
    </Transition>
  );
};

export { SocialsBlock };
