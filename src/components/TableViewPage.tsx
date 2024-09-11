'use client'

import { Col, Divider, Row, Tabs, Typography } from 'antd';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Dot from '@/public/assets/svgs/dot.svg';

const { Paragraph, Text } = Typography;
const data = [
  {
    key: '1',
    option: '1. Тип дома',
    choice: 'Mikea 1',
    cost: '13000$',
  },
  {
    key: '2',
    option: '2. Количество этажей',
    choice: '2 этажа',
    cost: '13000$',
  },
  {
    key: '3',
    option: '3. Тип кровли',
    choice: 'Металлочерепица',
    cost: '13000$',
  },
  {
    key: '4',
    option: '4. Внутренние отделочные материалы',
    choice: 'Гипсокартон',
    cost: '13000$',
  },
  {
    key: '5',
    option: '5. Внешние отделочные материалы',
    choice: 'Металлический сайдинг',
    cost: '13000$',
  },
  {
    key: '6',
    option: '6. Тип окон и дверей',
    choice: 'Алюминиевые окна и двери',
    cost: '13000$',
  },
  {
    key: '7',
    option: '7. Дополнительные параметры',
    choice: 'Гараж',
    cost: '13000$',
  },
];

const CustomTableView = () => {
  const isTablet = useMediaQuery(768);
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
      items={data.map(({ option, choice, cost }, i) => {
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

      {data.map((item) => (
        <div key={item.key}>
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
