import React from 'react'
import { Col, Row } from "antd"
import Transition from "../Transition"
import { useEffect, useState } from "react"
import { fetchFooters } from "@/utils/fetchData"

function Footer() {
  const [items, setItems] = useState<any>(null)

  useEffect(() => {
    const loadFooter = async () => {
      try {
        await fetchFooters().then((data: any) => (
          setItems(data)
        ))
      } catch (error) {
        console.log(error); 
      }
    }

    loadFooter()
  }, [])

  if (!items) {
    return <div>Loading...</div>
  }

  return (
    <Transition>
    <footer className="m-auto max-w-[1360px] text-center text-sm md:pt-8">
        <React.Fragment >
          <Row
            align="middle"
            justify="center"
            gutter={[0, 20]}
            className="mb-[20px] md:mb-0"
          >
            <Col md={5} xs={24}>
              <a
                href="https://wa.me/message/6SKVNNWYVYDOB1"
                className="text-primary-gray underline decoration-primary underline-offset-4 hover:text-primary"
                target="_blank"
                rel="noopener"
              >
               {items.title_whatsapp}
              </a>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col items-center font-helvetica">
                <h4 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[60px]">
                  <a className='text-gray-700 hover:text-gray-700' href={`tel:${items.phone_number}`}>{items.phone_number}</a>
                </h4>
                <h4 className="font-corporate text-[36px] leading-[30px] text-primary md:text-[64px] md:leading-[60px]">
                  <a className='no-underline text-primary hover:text-primary' href={`mailto:${items.email}`}>{items.email}</a>
                </h4>
              </div>
            </Col>
            <Col md={5} xs={24}>
              <a
                href="https://web.telegram.org/"
                className="text-primary-gray underline decoration-primary underline-offset-4 hover:text-primary"
                target="_blank"
                rel="noopener"
              >
                {items.title_telegram}
              </a>
            </Col>
          </Row>
          <Row gutter={[0, 20]} className="my-[50px]">
            <Col md={8} xs={24}>
              <div className="md:text-left">
                ©{new Date().getFullYear()} Все права защищены.
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className="text-black">
                Адрес: <br />
                <span className="text-primary-gray">
                  <a className="text-primary-gray hover:text-primary-gray" href="https://2gis.kg/bishkek/firm/70000001087638366?m=74.647787%2C42.81819%2F16">{items.address}</a>
                </span>
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className="md:text-right">Сайт сделан компанией K.Kode</div>
            </Col>
          </Row>
          <Row align="middle" justify="center" className="md:mb-[10px]">
            <Col md={24}>
              <span className="text-2xl text-primary-gray">
                Строительная компания
              </span>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="center"
            className="relative h-[150px] overflow-hidden md:h-[160px]"
          >
            <Col
              span={24}
              className="absolute bottom-[-60px] md:bottom-[-10px]"
            >
              <h2 className=" text-[60px] font-bold text-primary md:text-[220px]">
                tash.building
              </h2>
            </Col>
          </Row>
        </React.Fragment>
    </footer>
  </Transition>
  )
}

export default Footer