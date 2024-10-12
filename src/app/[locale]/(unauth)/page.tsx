import { getTranslations } from 'next-intl/server';
import React from 'react';

import { SolutionsCarousel } from '@/components/SolutionsCarousel/SolutionsCarousel';
import { Contact } from '@/page-components/Contact';
import { FeaturesCarousel } from '@/page-components/FeaturesCarousel';
import { Hero } from '@/page-components/Hero';
import { Lstk } from '@/page-components/LstkBlock';
import { LstkIndividual } from '@/page-components/LstkIndividual';
import { SocialsBlock } from '@/page-components/SocialsBlock';
import { Uniqueness } from '@/page-components/Uniqueness';
import { TextBlockHome } from '@/page-components/TextBlockHome';
import ButtonAnimate from '@/components/ButtonAnimate';
import ButtonModal from '@/components/ButtonModal';

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

export default async function Index() {
  return (
    <>
      <Hero />
      <LstkIndividual />
      <Lstk />
      <Uniqueness />
      <FeaturesCarousel />
      <TextBlockHome />
      <Contact />
      <SolutionsCarousel />
      <SocialsBlock />
      <div className='contact_us_ship'>
        <ButtonAnimate>
          <ButtonModal/>
        </ButtonAnimate>
      </div>
    </>
  );
}
