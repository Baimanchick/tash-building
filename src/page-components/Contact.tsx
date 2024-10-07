'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import { fetchTechnology } from '@/utils/fetchData';

const Contact = () => {
  const [items, setItems] = useState<any>(null)

  useEffect(() => {
    const loadingData = async () => {
      try {
        await fetchTechnology().then((data: any) => (
          setItems(data)
        ))
      } catch (error) {
        console.log(error);
      }
    }

    loadingData()
  }, [])

  if(!items) {
    return <div>Loading...</div>
  }

  return (
    <Transition>
      <div className="relative left-0 top-0 m-auto mb-[60px] h-screen max-h-[900px] w-screen max-w-[1360px] px-8 pt-[100px] md:mb-0">
        {items.map((item: any, id: number) => (
          <React.Fragment key={id}>
              <Image
                className="rounded-[20px]"
                src={item.image}
                alt="contact"
                quality="100"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />

            <Transition duration={1.2}>
              <Row className="mb-5">
                <Col md={14} xs={24}>
                  <h3 className="text-[32px] leading-[26px] text-white md:text-[64px] md:leading-[60px]">
                    {item.title}
                  </h3>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col md={8} xs={24}>
                  <p className="text-[16px] leading-[16px] text-white">
                    {item.description}
                  </p>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col span={5}>
                  <ButtonAnimate>
                    <CustomButton dot className="!px-[30px] !py-6" type="primary">
                      {item.button_title}
                    </CustomButton>
                  </ButtonAnimate>
                </Col>
              </Row>
            </Transition>
          </React.Fragment>
        ))}
      </div>
    </Transition>
  );
};

export { Contact };
