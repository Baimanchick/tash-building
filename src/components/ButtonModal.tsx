'use client'

import { CustomButton } from "@/components/Button";
import ButtonAnimate from "@/components/ButtonAnimate";
import ModalApp from "@/components/ModalApp";
import { useState } from "react";

const ButtonModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
            <ButtonAnimate>
              <CustomButton onClick={showModal} dot className="!px-[30px] !py-6" type="primary">
                Заказать дом
              </CustomButton>
            </ButtonAnimate>
            <ModalApp handleCancel={handleCancel} isModalVisible={isModalVisible} />
    </>
  );
};

export default ButtonModal;