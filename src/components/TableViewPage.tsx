'use client'

import { Col, Divider, Row, Tabs, Typography } from 'antd';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Dot from '@/public/assets/svgs/dot.svg';

const { Paragraph, Text } = Typography;

interface TableData {
  option: string,
  choice: string,
  cost: number
}

const CustomTableView = ({oneHouse} : any) => {
  const isTablet = useMediaQuery(768);

  console.log(oneHouse);
  
  
  return isTablet ? (
    <Tabs
      className="!m-auto !my-6 !max-w-[1360px] !px-6"
      onChange={(key) => console.log(key)}
      type="card"
      tabBarStyle={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
      items={oneHouse?.map(({ option, choice, cost } : TableData, i: number) => {
        const id = String(i + 1);
        return {
          label: option,
          key: id,
          children: (
            <div>
              <div className="my-3 flex w-[50%] items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
                Выбор <Dot />
              </div>
              <Paragraph className="max-w-[300px] text-[16px]">
                {choice}
              </Paragraph>
              <div className="my-3 flex w-[50%] items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
                Стоимость <Dot />
              </div>
              <Paragraph className="max-w-[300px] text-[16px]">
                {cost}
              </Paragraph>
            </div>
          ),
        };
      })}
    />
  ) : (
    <div className="m-auto max-w-[1360px] p-6">
      <Row
        style={{
          backgroundColor: '#f5f5f5',
          padding: '10px 0',
          textAlign: 'center',
        }}
        align="middle"
        justify="center"
      >
        <Col span={3} >
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            Опции <Dot />
          </div>
        </Col>
        <Col span={3} offset={6}>
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            Ваш выбор <Dot />
          </div>
        </Col>
        <Col span={5} offset={5}>
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            Стоимость <Dot />
          </div>
        </Col>
      </Row>

      <Divider style={{ margin: 0 }} />

      {oneHouse?.map((item : TableData, id: number) => (
        <div key={id}>
          <Row style={{ padding: '20px 0', textAlign: 'left' }}>
            <Col span={6}>
              <Text strong>{item.option}</Text>
            </Col>
            <Col span={6} offset={4}>
              {item.choice}
            </Col>
            <Col span={6} offset={2}>
              {item.cost}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default CustomTableView;
