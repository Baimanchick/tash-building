import { getTranslations } from 'next-intl/server';
import React from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import { Tabs } from '@/components/Tabs';
import Transition from '@/components/Transition';
import { Houses } from '@/page-components/Houses';
import { SocialsBlock } from '@/page-components/SocialsBlock';
import { TextBlock } from '@/page-components/TextBlock';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Individual = () => {
  return (
    <div>
      <Transition>
        <section className="mb-[85px] pt-[100px]">
          <Tabs className="mb-[25px] md:mb-[75px]" />
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <h4 className="max-w-[1200px] text-center font-helvetica text-[44px] leading-[34px] text-black md:text-[104px] md:leading-[80px]">
              Построим дом по вашему представлению
            </h4>

            <p className="m-auto max-w-[335px] text-center text-[16px] font-light leading-[16px] text-primary-gray md:max-w-[400px]">
              Вы можете заказать уничтожение дома по вашему индивидуальному
              проекту с учетом всех пожеланий.
            </p>
            <ButtonAnimate>
              <CustomButton dot className="!px-[30px] !py-6" type="primary">
                Заказать дом
              </CustomButton>
            </ButtonAnimate>
          </div>
        </section>
      </Transition>
      <Houses />
      <TextBlock text="Также можете заказать мансарду, стропильную систему, надстройку на уже построенные здания, пристройки, гаражи, банные комплексы и многое другое. Наш проектный отдел производит адаптацию Вашего проекта (кирпич, брус, газобетон) в каркас из ЛСТК." />
      <SocialsBlock />
    </div>
  );
};

export default Individual;
