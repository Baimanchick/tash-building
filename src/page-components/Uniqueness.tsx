'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FeatureCard } from '@/components/FeatureCard';
import Transition from '@/components/Transition';
import { fetchUniqueItems } from '@/utils/fetchData';

const Uniqueness = () => {
  const [ data, setData ] = useState<any>([]);

  useEffect(() => {
    const loadData = async (  ) => {
      try {
        await fetchUniqueItems().then((item: any) => {
          setData(item);
        })
      } catch (error) {
        console.log('load image lstk error', error);
      }
    }

    loadData();
  }, [])

  if(!data) { 
    return null
  }

  return (
    <div className="relative m-auto max-w-[1360px]">
      <Transition>
          {data.map((item: any, id: number) => (
            <React.Fragment>
              <h2 key={id} className="mb-[30px] text-center text-[44px] sm:text-6xl">
                  {item.title}
              </h2>
              <div className="mb-[30px] flex items-center justify-center md:mb-0">
                <Image
                  className="size-[335px] rounded-full object-cover sm:size-[700px]"
                  src={item.image}
                  width={700}
                  height={700}
                  alt="Picture of the author"
                  />
              </div>
              <div className="flex w-full flex-col items-center gap-2 overflow-hidden px-3 md:!absolute md:!top-[80px] md:block">
                { 
                  item.items.map((uniq: any, index: number) => (
                    <Row key={index} align={{ xs: 'middle' }} justify={{ xs: 'center' }}>
                      <Col md={ index === 0 ? { span: 8, offset: 14 } : index === 1 ? { span: 8, offset: 0 } : index === 2 ? { span: 8, offset: 17 } : index === 3 ? { span: 8, offset: 3 } : {} } xs={{ offset: 0, span: 24 }}>
                        <FeatureCard
                          title={uniq.title}
                          description={uniq.description}
                          tag={uniq.advantage}
                          />
                      </Col>
                    </Row>
                  ))
                }
              </div>
            </React.Fragment>
            ))}
      </Transition>
    </div>
  );
};

export { Uniqueness };
