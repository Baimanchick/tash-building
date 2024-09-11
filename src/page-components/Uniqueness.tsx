'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';

import { FeatureCard } from '@/components/FeatureCard';
import Transition from '@/components/Transition';
import image from '@/public/assets/images/unique.png';

const Uniqueness = () => {
  return (
    <div className="relative m-auto max-w-[1360px]">
      <Transition>
        <h2 className="mb-[30px] text-center text-[44px] sm:text-6xl">
          Уникальность
        </h2>
        <div className="mb-[30px] flex items-center justify-center md:mb-0">
          <Image
            className="size-[335px] rounded-full object-cover sm:size-[700px]"
            src={image}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-2 overflow-hidden px-3 md:!absolute md:!top-[80px] md:block">
          <Row align={{ xs: 'middle' }} justify={{ xs: 'center' }}>
            <Col md={{ span: 8, offset: 14 }} xs={{ offset: 0, span: 24 }}>
              <FeatureCard
                title="Быстрая сборка"
                description="Благодаря точности изготовления и простоте монтажа, дома из ЛСТК собираются быстро и без лишних сложностей."
                tag="Быстро"
              />
            </Col>
          </Row>
          <Row align={{ xs: 'middle' }} justify={{ xs: 'center' }}>
            <Col md={{ span: 8, offset: 0 }} xs={{ offset: 0, span: 24 }}>
              <FeatureCard
                title="Легкость и прочность"
                description="ЛСТК-профили отличаются высокой прочностью при малом весе. Это позволяет возводить легкие, но одновременно прочные и надежные конструкции."
                tag="Эффективно"
              />
            </Col>
          </Row>
          <Row align={{ xs: 'middle' }} justify={{ xs: 'center' }}>
            <Col md={{ span: 8, offset: 17 }} xs={{ offset: 0, span: 24 }}>
              <FeatureCard
                title="Устойчивость к пожаром"
                description="Стальные конструкции имеют высокий уровень пожаробезопасности, что делает дома из ЛСТК более надежными с точки зрения безопасности."
                tag="Безопасно"
              />
            </Col>
          </Row>
          <Row align={{ xs: 'middle' }} justify={{ xs: 'center' }}>
            <Col md={{ span: 8, offset: 3 }} xs={{ offset: 0, span: 24 }}>
              <FeatureCard
                title="Экономичность"
                description="Строительство домов из ЛСТК может быть более экономичным, чем традиционные методы, благодаря уменьшению времени строительства и снижению затрат на материалы."
                tag="Экономично"
              />
            </Col>
          </Row>
        </div>
      </Transition>
    </div>
  );
};

export { Uniqueness };
