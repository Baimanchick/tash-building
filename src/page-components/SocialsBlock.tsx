'use client'

import React, { useEffect, useState } from 'react';

import { SocialCard } from '@/components/SocialCard';
import Socials from '@/components/Socials';
import Transition from '@/components/Transition';
import { fetchSocialMediaContent } from '@/utils/fetchData';

const SocialsBlock = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSocialMediaContent();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <Transition duration={1.4}>
      {items.map((item: any, index: number) => (
        <div className="m-auto mb-[100px] max-w-[1360px]" key={index}>
          <h3 className="m-auto mb-[30px] max-w-[720px] px-3 text-center text-[44px] leading-[34px] text-black md:px-0 md:text-[64px] md:leading-[60px]">
            {item.title}
          </h3>
          <Socials item={item} />
          <div className="flex flex-col items-center gap-1 px-3 md:flex-row">
            {item && item.videos.map((socialItem: any, socialIndex: number) => (
              <SocialCard
                link={socialItem.link}
                image={socialItem.image}
                text={socialItem.text}
                key={socialIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </Transition>
  );
};

export { SocialsBlock };
