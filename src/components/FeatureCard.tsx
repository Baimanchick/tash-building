'use client';

import { Card, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

import Transition from '@/components/Transition';
import Dot from '@/public/assets/svgs/dot.svg';

const FeatureCard = ({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) => {
  return (
    <Transition duration={1}>
      <Card
        bordered={false}
        style={{
          width: 'auto',
          maxWidth: 400,
          borderRadius: '20px',
          boxShadow:
            '3px 10px 23px 0px #70707005, 12px 39px 41px 0px #70707005, 27px 89px 56px 0px #70707003, 48px 157px 66px 0px #70707000, 75px 246px 72px 0px #70707000',
        }}
        classNames={{
          extra: '!m-0',
          header: '!border-0',
          body: '!pb-[20px]  !pt-[0px] !py-[20px]',
        }}
        extra={
          <Tag
            icon={<Dot style={{ fill: '#24923C' }} />}
            bordered={false}
            style={{
              background: '#F5F5F5',
              borderRadius: '35px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              paddingInline: '18px',
              paddingBlock: '5px',
              fontSize: '14px',
            }}
          >
            {tag}
          </Tag>
        }
      >
        <Meta className="font-inter" title={title} description={description} />
      </Card>
    </Transition>
  );
};

export { FeatureCard };
