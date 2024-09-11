import { getTranslations } from 'next-intl/server';
import React from 'react';

import { CustomButton } from '@/components/Button';
import ButtonAnimate from '@/components/ButtonAnimate';
import TableView from '@/components/TableView';
import TechnologyCarousel from '@/components/TechnologyCarousel';
import TechTabs from '@/components/TechTabs';
import Transition from '@/components/Transition';
import { SocialsBlock } from '@/page-components/SocialsBlock';

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

const Technology = () => {
  return (
    <div>
      <Transition>
        <section className="mb-[85px] pt-[100px]">
          <div className="mb-[25px] flex justify-center md:mb-[55px]">
            <CustomButton className=" !border-primary !px-[30px] !py-6 !text-primary ">
              Технология
            </CustomButton>
          </div>
          <div className="mb-[40px] flex flex-col items-center justify-center gap-[20px]">
            <h4 className="max-w-[1200px] text-center font-helvetica text-[44px] leading-[34px] text-black md:text-[104px] md:leading-[100px]">
              Узнайте больше <br /> про технологию ЛСТК
            </h4>

            <p className="m-auto max-w-[335px] text-center text-[16px] font-light leading-[16px] text-primary-gray md:max-w-[400px]">
              Лёгкие стальные тонкостенные конструкции (ЛСТК)— строительная
              конструкция из тонколистовой стали, применяемая для строительства
              быстровозводимого здания
            </p>
            <ButtonAnimate>
              <CustomButton dot className="!px-[30px] !py-6" type="primary">
                Заказать дом
              </CustomButton>
            </ButtonAnimate>
          </div>
          <TechnologyCarousel />
          <TechTabs />
          <TableView />
          <SocialsBlock />
        </section>
      </Transition>
    </div>
  );
};

export default Technology;
