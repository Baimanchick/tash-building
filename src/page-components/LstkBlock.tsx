'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import { fetchLSTKCommerce } from '@/utils/fetchData';

const Lstk = () => {
  const [items, setItems] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchLSTKCommerce().then((data: any) => {
          setItems(data)
        })
      } catch (error) {
        console.log(error);
      }
    }

    loadData()
  }, [])

  if(!items){
    return <div>Loading ...</div>
  }

  return (
    <Transition>
      <div className="relative left-0 top-0 m-auto mb-[60px] max-h-[990px] h-[900px] w-screen px-8 pt-[30px] md:mb-[100px]">
        { items.map((item:any, id: number) => (
          <React.Fragment key={id}>
            <Image
              src={item.image}
              className='desk-image'
              alt="contact"
              quality="100"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              src={item.image_mobile}
              className='mobile-image'
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
                    <Link href="commerce" className="text-primary">
                      <CustomButton dot className="!px-[30px] !py-6" type="primary">
                        {item.button_title}
                      </CustomButton>
                    </Link>
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

export { Lstk };
