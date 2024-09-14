import { getTranslations } from 'next-intl/server';
import React from 'react';
import PageDetailComponent from '@/components/PageDetailComponent';

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

const Page = ({params} : {params: {slug : string}}) => {
  const {slug} = params
  
  return (
    <PageDetailComponent slug={slug}/>
  );
};

export default Page;
