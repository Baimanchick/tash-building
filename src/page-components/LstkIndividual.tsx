'use client';

import { Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import individual from '@/public/assets/images/individual1.webp';
import LogoTash from '@/public/assets/svgs/tash-building-logo.svg';

const { Paragraph } = Typography;

const LstkIndividual = () => {
  return (
    <Transition>
      <div className="relative left-0 top-0 m-auto mb-[60px] h-screen max-h-[1200px] w-screen px-3  md:mb-[100px]">
        <div className="m-auto max-w-[1360px]">
          <Row  justify="end" align="top">
            <Col xs={24} md={15}>
              <h3 className="mb-[20px] text-[32px] leading-[38px] text-black md:text-[64px] md:leading-[60px]">
                Строительство индивидуальных домов из ЛСТК
              </h3>
            </Col>
          </Row>
          <Row  justify="end" align="top">
            <Col xs={24} md={9}>
              <Paragraph className="!max-w-full !text-[16px] !leading-[18px] !text-primary-gray md:!max-w-[450px] md:!text-[16px] md:!leading-[16px]">
                Мы предлагаем полный комплекс услуг по проектированию и
                строительству индивидуальных домов из ЛСТК, обеспечивая высокий
                уровень качества на каждом этапе – от идеи до заселения.
              </Paragraph>
            </Col>
            <Col xs={24} md={15}>
              <Paragraph className="!max-w-full !text-[14px] !leading-[18px] !text-primary-gray md:!max-w-[550px] md:!text-[16px] md:!leading-[16px]">
                Закажите дом здание из ЛСТК и получите высокотехнологичное,
                экономичное решение с гарантией точных сроков и качества
                исполнения.
              </Paragraph>
              <ButtonAnimate>
                <Link href="individual" className="text-primary">
                  <CustomButton
                    dot
                    className="!px-[20px] !py-4 md:!px-[30px] md:!py-6"
                    type="primary"
                  >
                    Подробнее
                  </CustomButton>
                </Link>
              </ButtonAnimate>
            </Col>
          </Row>
          <Row
            
            justify="end"
            align="top"
            className="mt-[10px]"
          >
            <Col
              xs={{ span: 24, order: 2 }}
              md={{ span: 9, order: 1 }}
              order={1}
            >
              <LogoTash className="styled-logo mt-[40px] md:mt-[460px]" />
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              md={{ span: 15, order: 2 }}
              order={2}
            >
              <Image
                src={individual}
                width={720}
                height={520}
                alt="house"
                className="h-[300px] w-full rounded-[10px] object-cover object-center md:h-[520px] md:w-[720px]"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Transition>
  );
};

export { LstkIndividual };
