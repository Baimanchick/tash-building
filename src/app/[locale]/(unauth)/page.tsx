import { getTranslations } from 'next-intl/server';
import React from 'react';

import { SolutionsCarousel } from '@/components/SolutionsCarousel/SolutionsCarousel';
import { Contact } from '@/page-components/Contact';
import { FeaturesCarousel } from '@/page-components/FeaturesCarousel';
import { Hero } from '@/page-components/Hero';
import { Lstk } from '@/page-components/LstkBlock';
import { LstkIndividual } from '@/page-components/LstkIndividual';
import { SocialsBlock } from '@/page-components/SocialsBlock';
import { TextBlock } from '@/page-components/TextBlock';
import { Uniqueness } from '@/page-components/Uniqueness';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  number: number;
  image: string;
  carousel: number;
}
// export interface ICarousel {
//   id: number;
//   items: Array<CarouselItem>;
//   title: string;
//   category: number;
// }
//
// interface GetData {
//   id: number;
//   main_carousels: ICarousel;
// }

export default async function Index() {
  return (
    <>
      <Hero />
      <LstkIndividual />
      <Lstk />
      <Uniqueness />
      <FeaturesCarousel />
      <TextBlock text="Дома из ЛСТК могут быть спроектированы с использованием современных архитектурных решений и инновационных дизайнерских элементов,  повышают комфорт и эстетику вашего жилья." />
      <Contact />
      <SolutionsCarousel />
      <SocialsBlock />
    </>
  );
}
