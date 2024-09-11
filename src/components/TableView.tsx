'use client';

//
// import { Table, Typography } from 'antd';
// import React from 'react';
//
// const { Text } = Typography;
//
// // Define the columns for the table
// const columns = [
//   {
//     title: 'Сравнение',
//     dataIndex: 'criteria',
//     key: 'criteria',
//     width: 200,
//     render: (text) => <Text style={{ fontWeight: 'bold' }}>{text}</Text>,
//   },
//   {
//     title: 'ЛСТК',
//     dataIndex: 'lstk',
//     key: 'lstk',
//     width: 300,
//     render: (text) => <Text>{text}</Text>,
//   },
//   {
//     title: 'Традиционные материалы',
//     dataIndex: 'traditional',
//     key: 'traditional',
//     width: 300,
//     render: (text) => <Text>{text}</Text>,
//   },
// ];
//
// // Define the data for the table
// const data = [
//   {
//     key: '1',
//     criteria: '1. Вес и прочность',
//     lstk: 'ЛСТК характеризуются высокой прочностью при относительно небольшом весе, что упрощает транспортировку и снижает нагрузку на фундамент.',
//     traditional:
//       'Тяжелые строительные материалы, такие как бетон и кирпич, имеют высокий вес, требуя более мощные фундаменты и более сложные системы транспортировки.',
//   },
//   {
//     key: '2',
//     criteria: '2. Скорость строительства',
//     lstk: 'Процесс сборки ЛСТК более быстрый благодаря пре-фабрикации и легкости материала.',
//     traditional:
//       'Строительство с использованием традиционных материалов может потребовать больше времени из-за необходимости возведения стен и высыхания бетона.',
//   },
//   {
//     key: '3',
//     criteria: '3. Энергоэффективность',
//     lstk: 'Обеспечивает хорошую теплоизоляцию и энергосбережение благодаря возможности использования современных утеплителей.',
//     traditional:
//       'Могут требовать дополнительных материалов для теплоизоляции, что может увеличить затраты и время строительства.',
//   },
//   {
//     key: '4',
//     criteria: '4. Экологическая устойчивость',
//     lstk: 'Имеет меньший экологический след благодаря возможности переработки и уменьшению количества строительного мусора.',
//     traditional:
//       'Возможно, требуют больше энергии и ресурсов на производство, а также создают больше отходов.',
//   },
//   {
//     key: '5',
//     criteria: '5. Гибкость дизайна',
//     lstk: 'Обеспечивает широкие возможности для индивидуального дизайна и архитектурных решений.',
//     traditional:
//       'Могут иметь ограничения в создании сложных форм и структур (из-за веса, габаритов, индивидуальных свойств).',
//   },
//   {
//     key: '6',
//     criteria: '6. Стоимость',
//     lstk: 'Может быть конкурентоспособным с традиционными материалами, особенно учитывая сокращение сроков строительства и возможные экономии на фундаменте.',
//     traditional:
//       'Начальные затраты могут быть ниже, но дополнительные расходы могут возникнуть из-за увеличенного времени строительства и необходимости в дополнительных изоляционных материалах.',
//   },
// ];
//
// const TableView = () => {
//   return (
//     <div>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={false}
//         style={{ background: 'transparent' }}
//         bordered
//         title={() => (
//           <div className="text-[44px] leading-[44px] text-black">
//             Преимущества ЛСТК от <br />{' '}
//             <span className=" text-primary-gray"> традиционных материалов</span>{' '}
//           </div>
//         )}
//       />
//     </div>
//   );
// };
//
// export default TableView;
import { Col, Divider, Row, Tabs, Typography } from 'antd';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Dot from '@/public/assets/svgs/dot.svg';

const { Paragraph, Text } = Typography;
const onChange = (key: string) => {
  console.log(key);
};

const data = [
  {
    key: '1',
    criteria: '1. Вес и прочность',
    lstk: 'ЛСТК характеризуются высокой прочностью при относительно небольшом весе, что упрощает транспортировку и снижает нагрузку на фундамент.',
    traditional:
      'Тяжелые строительные материалы, такие как бетон и кирпич, имеют высокий вес, требуя более мощные фундаменты и более сложные системы транспортировки.',
  },
  {
    key: '2',
    criteria: '2. Скорость строительства',
    lstk: 'Процесс сборки ЛСТК более быстрый благодаря пре-фабрикации и легкости материала.',
    traditional:
      'Строительство с использованием традиционных материалов может потребовать больше времени из-за необходимости возведения стен и высыхания бетона.',
  },
  {
    key: '3',
    criteria: '3. Энергоэффективность',
    lstk: 'Обеспечивает хорошую теплоизоляцию и энергосбережение благодаря возможности использования современных утеплителей.',
    traditional:
      'Могут требовать дополнительных материалов для теплоизоляции, что может увеличить затраты и время строительства.',
  },
  {
    key: '4',
    criteria: '4. Экологическая устойчивость',
    lstk: 'Имеет меньший экологический след благодаря возможности переработки и уменьшению количества строительного мусора.',
    traditional:
      'Возможно, требуют больше энергии и ресурсов на производство, а также создают больше отходов.',
  },
  {
    key: '5',
    criteria: '5. Гибкость дизайна',
    lstk: 'Обеспечивает широкие возможности для индивидуального дизайна и архитектурных решений.',
    traditional:
      'Могут иметь ограничения в создании сложных форм и структур (из-за веса, габаритов, индивидуальных свойств).',
  },
  {
    key: '6',
    criteria: '6. Стоимость',
    lstk: 'Может быть конкурентоспособным с традиционными материалами, особенно учитывая сокращение сроков строительства и возможные экономии на фундаменте.',
    traditional:
      'Начальные затраты могут быть ниже, но дополнительные расходы могут возникнуть из-за увеличенного времени строительства и необходимости в дополнительных изоляционных материалах.',
  },
];

const CustomTable = () => {
  const isTablet = useMediaQuery(768);
  return isTablet ? (
    <Tabs
      className="!m-auto !my-6 !max-w-[1360px] !px-6"
      onChange={onChange}
      type="card"
      tabBarStyle={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
      items={data.map(({ criteria, lstk, traditional }, i) => {
        const id = String(i + 1);
        return {
          label: criteria,
          key: id,
          children: (
            <div>
              <div>
                <div className="my-3 flex w-[35%] items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
                  ЛСТК <Dot />
                </div>
                <Paragraph className="max-w-[300px] text-[16px]">
                  {lstk}
                </Paragraph>
              </div>
              <div>
                <div className="my-3 flex w-[50%] items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
                  Традиционные материалы <Dot />
                </div>
                <Paragraph className="max-w-[300px] text-[16px]">
                  {traditional}
                </Paragraph>
              </div>
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
        <Col span={4}>
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            Сравнение <Dot />
          </div>
        </Col>
        <Col span={2} offset={8}>
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            ЛСТК <Dot />
          </div>
        </Col>
        <Col span={5} offset={5}>
          <div className="flex items-center justify-center gap-2 rounded-[20px] bg-primary px-[15px] py-[8px] text-[14px] text-white">
            Традиционные материалы <Dot />
          </div>
        </Col>
      </Row>

      <Divider style={{ margin: 0 }} />

      {data.map((item) => (
        <div key={item.key}>
          <Row style={{ padding: '20px 0', textAlign: 'left' }}>
            <Col span={6}>
              <Text strong>{item.criteria}</Text>
            </Col>
            <Col span={6} offset={4}>
              {item.lstk}
            </Col>
            <Col span={6} offset={2}>
              {item.traditional}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default CustomTable;
