'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import Transition from '@/components/Transition';
import lstk from '@/public/assets/images/lstk.webp';
import lstkMobile from '@/public/assets/images/lstk_mobile.webp';

const Lstk = () => {
  return (
    <Transition>
      <div className="relative left-0 top-0 m-auto mb-[60px] max-h-[990px] h-[900px] w-screen px-8 pt-[30px] md:mb-[100px]">
        <Image
          src={lstk}
          className='desk-image'
          alt="contact"
          quality="100"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Image
          src={lstkMobile}
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
                Строительство <br /> коммерческих зданий <br /> из ЛСТК
              </h3>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={8} xs={24}>
              <p className="text-[16px] leading-[16px] text-white">
                Легкие стальные тонкостенные конструкции (ЛСТК) – это
                современное решение для строительства коммерческих объектов.
                Этот метод позволяет возводить здания быстро, экономично и с
                высокой точностью. Мы предлагаем комплексные услуги по
                проектированию, производству и монтажу зданий из ЛСТК, учитывая
                все индивидуальные особенности вашего проекта. Наши специалисты
                готовы воплотить в жизнь любые идеи, обеспечив качество и
                надежность на каждом этапе строительства.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col span={5}>
              <ButtonAnimate>
                <Link href="commerce" className="text-primary">
                  <CustomButton dot className="!px-[30px] !py-6" type="primary">
                    Подробнее
                  </CustomButton>
                </Link>
              </ButtonAnimate>
            </Col>
          </Row>
        </Transition>
      </div>
    </Transition>
  );
};

export { Lstk };
