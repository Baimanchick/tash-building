import type { ButtonProps as BtnPropsAntd } from 'antd';
import { Button } from 'antd';
import React from 'react';

import Dot from '@/public/assets/svgs/dot.svg';

export interface BurgerButtonProps extends BtnPropsAntd {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  dot?: 'none' | React.ReactNode;
}

export const CustomButton = ({
  children,
  className,
  dot = 'none',
  ...props
}: BurgerButtonProps): JSX.Element => {
  return (
    <Button
      className={`${className} !rounded-[17px] bg-primary px-[10px] pb-[18px] pt-[20px] font-helvetica text-[16px] hover:!bg-primary`}
      icon={dot !== 'none' && <Dot />}
      size="large"
      type="primary"
      iconPosition="end"
      {...props}
    >
      {children}
    </Button>
  );
};
