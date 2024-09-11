import { Col, Row } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import StyledText from '@/components/StyledText';
import { HousesCarousel } from '@/components/HousesCarousel';
import plan from '@/public/assets/images/plan.png'
import dom from '@/public/assets/images/dom1.webp'
import { SocialsBlock } from '@/page-components/SocialsBlock';
import CustomTableView from '@/components/TableViewPage';

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

const items = [
  {
    id: 1,
    title: 'Микея 1',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: dom,
  },
  {
    id: 2,
    title: 'Микея 2',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: dom,
  },
  {
    id: 3,
    title: 'Микея 3',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: dom,
  },
];


const items2 = [
  {
    id: 1,
    title: 'Микея 1',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: plan,
  },
  {
    id: 2,
    title: 'Микея 2',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: plan,
  },
  {
    id: 3,
    title: 'Микея 3',
    description:
      'Готовый дом из ЛСТК на ул. Центральной, 5, площадью 170м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто.',
    imgSrc: plan,
  },
];

const Page = ({ }) => {
  return (
    <section className="m-auto max-w-[1360px] pt-[70px]">
      <Row>
        <Col>
          <div className="mb-[40px] flex flex-col items-start justify-between px-3 md:items-start md:p-0">
            <h3 className="text-[44px]">Default</h3>
            <StyledText
              className="!text-[24px] leading-[26px]"
              textItem="Готовый дом из ЛСТК на ул. Центральной, 5, площадью 150 м². Двухэтажный, три спальни, гостиная, кухня-столовая, два санузла. Современный дизайн, качественная отделка, утеплённые стены. Участок 10 соток, гараж на два авто."
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={12}>
          <HousesCarousel houses={items} />
        </Col>
        <Col xs={24} sm={12}>
          <HousesCarousel houses={items2} />
        </Col>
      </Row>
      <CustomTableView/>
      <SocialsBlock/>
    </section>
  );
};

export default Page;
