'use client'

import React, { useEffect, useState } from 'react';

import Transition from '@/components/Transition';
import { fetchBigDesription } from '@/utils/fetchData';

const TextBlockHome = () => {
  const [ data, setData ] = useState<any>();

  useEffect(() => {
    const loadImage = async () => {
      try {
        await fetchBigDesription().then((item: any) => {
          setData(item);
        })
      } catch (error) {
        console.log('load data big descriotions error', error);
      }
    }

    loadImage();
  }, [])


  return (
    <Transition>
      <section className="my-[60px] md:my-[70px]">
        <div className="text-center text-[20px] leading-[21px] text-black md:px-[120px] md:py-[100px] md:text-[64px] md:leading-[60px]">
          <h3 className="m-auto max-w-[1200px]">{ data ? data.description : '' }</h3>
        </div>
      </section>
    </Transition>
  );
};

export { TextBlockHome };
