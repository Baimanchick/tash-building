import { Col, Row } from 'antd';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import Arrow from '@/public//assets/svgs/arrow-link.svg';

export const SocialCard = ({
  image,
  text,
  link,
}: {
  image: string | StaticImageData;
  text: string;
  link: string;
}): JSX.Element => {
  return (
    <div className="relative left-0 top-0 h-[200px] w-full cursor-pointer rounded-[12px] p-[30px] md:h-[400px] md:w-[670px]">
      <a href={link} target="_blank" rel="noopener">
        <Image
          className="rounded-[12px]"
          src={image}
          alt="contact"
          quality="100"
          layout="fill"
          objectFit="cover"
        />

        <Row className="mb-5">
          <Col xs={24} md={14}>
            <h3 className="inline text-[24px] leading-[27px] text-white">
              {text}
              <span className="ml-2 inline-block">
                <Arrow className="h-[14px] w-[18px] fill-white" />
              </span>
            </h3>
          </Col>
        </Row>
      </a>
    </div>
  );
};
