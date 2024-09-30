
import { getTranslations } from 'next-intl/server';
import React from 'react';
import Typical from './Typical';

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


const TypicalHoses = () => {
  return (
    <Typical/>
  );
};

export default TypicalHoses;
