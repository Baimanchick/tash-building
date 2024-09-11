'use client';

import type { ButtonProps as BtnPropsAntd } from 'antd';
import { Button } from 'antd';
import React from 'react';

import Dot from '@/public/assets/svgs/dot.svg';

export interface ButtonProps extends BtnPropsAntd {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  dot?: boolean;
}

export const CustomButton = ({
  children,
  className = '',
  dot = false,
  type = 'default',
  ...props
}: ButtonProps) => {
  const styles: Record<string, string> = {
    primary:
      '!rounded-[17px] !bg-primary px-[10px] pb-[18px] pt-[20px] font-helvetica text-[16px] hover:!bg-primary',
    default:
      '!rounded-[20px] px-[10px] pb-[18px] pt-[20px] font-helvetica text-[16px] text-white hover:!border-primary hover:!text-primary',
  };

  return (
    <Button
      className={`${className} ${styles[type]}`}
      icon={dot && <Dot />}
      size="large"
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};
