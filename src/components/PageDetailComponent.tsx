'use client'

import { SocialsBlock } from '@/page-components/SocialsBlock';
import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { HousesCarousel } from './HousesCarousel';
import StyledText from './StyledText';
import CustomTableView from './TableViewPage';
import { fetchOneHouse } from '@/utils/fetchData';
import Transition from './Transition';

function PageDetailComponent({ slug }: { slug: string }) {
  const [oneHouse, setOneHouse] = useState<any>(null); 

  useEffect(() => {
    const loadOneHouse = async () => {
      try {
        const fetchedOneHouse = await fetchOneHouse(+slug);
        setOneHouse(fetchedOneHouse);
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    };
    
    loadOneHouse();
  }, [slug]);  

  if (!oneHouse) {
    return null; 
  }

  

  return (
    <section className="m-auto max-w-[1360px] pt-[70px]">
      <Transition>
        <Row>
          <Col>
            <div className="mb-[40px] flex flex-col items-start justify-between px-3 md:items-start md:p-0">
              <h3 className="text-[44px]">{oneHouse.title}</h3>
              <StyledText
                className="!text-[24px] leading-[26px]"
                textItem={oneHouse.description}
              />
            </div>
          </Col>
        </Row>
      </Transition>
      <Transition>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12}>
            <HousesCarousel houses={oneHouse.house_image_carousel} /> 
          </Col>
          <Col xs={24} sm={12}>
            <HousesCarousel houses={oneHouse.house_scheme_carousel} /> 
          </Col>
        </Row>
        <CustomTableView oneHouse={oneHouse.tables || []}/>
      </Transition>
      <SocialsBlock/>
    </section>
  );
}

export default PageDetailComponent;
