'use client'

// import { CustomButton } from "@/components/Button";
import ButtonAnimate from "@/components/ButtonAnimate";
import ButtonModal from "@/components/ButtonModal";
import { SolutionsCarousel } from "@/components/SolutionsCarousel/SolutionsCarousel";
import Transition from "@/components/Transition";
import { Houses } from "@/page-components/Houses";
import { SocialsBlock } from "@/page-components/SocialsBlock";
import { TextBlock } from "@/page-components/TextBlock";
import { Tabs } from "antd";

const Typical = () => {

  return (
    <div>
      <Transition>
        <section className="mb-[85px] pt-[100px]">
          <Tabs className="mb-[25px] md:mb-[75px]" />
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <h4 className="max-w-[1200px] text-center font-helvetica text-[44px] leading-[34px] text-black md:text-[104px] md:leading-[80px]">
              Наши готовые типовые решения
            </h4>

            <p className="m-auto max-w-[335px] text-center text-[16px] font-light leading-[16px] text-primary-gray md:max-w-[400px]">
              Вы можете выбрать себе дом из каталога типовых решений, Вам не
              придется платить отдельно за разработку проекта и тратить на это
              свое время
            </p>
            <ButtonAnimate>
                <ButtonModal/>
            </ButtonAnimate>
          </div>
        </section>
      </Transition>
      <Houses />
      <TextBlock text="Архитекторы-профессионалы полностью продумали планировки домов и разработали детальные проекты. На такие дома полностью разработаны проекты инженерных сетей и расчитаны сметы. Стоимость типового дома вы можете узнать с точностью  до 1 сома." />
      <SolutionsCarousel />
      <SocialsBlock />
    </div>
  );
};

export default Typical;