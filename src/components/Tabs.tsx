'use client'

import { Select } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { CustomButton } from '@/components/Button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ArrowIcon from '@/public/assets/svgs/arrow-down.svg';
import { useCategories } from '@/hooks/useCategories'; 

const tabs: any = {
  indi: '!border-primary !text-primary',
  'typical-houses': '!border-primary !text-primary',
  comme: '!border-primary !text-primary',
  tip: '!border-primary !text-primary'
};

const Tabs = ({ className }: { className?: string }) => {
  const isTablet = useMediaQuery(768);
  const router = useRouter();
  const { categories, selectedValue, setSelectedValue, } = useCategories(); 

  const handleSelectChange = (value: string) => {
    setSelectedValue(value); 
    const selectedCategory = categories.find(item => item.title === value);
    if (selectedCategory) {
      router.push(
        selectedCategory.key === 'indi' ? '/individual' : 
        selectedCategory.key === 'tip' ? '/typical-houses' : 
        selectedCategory.key === 'comme' ? '/commerce' : '/'
      );
    }
  };    


  return !isTablet ? (
    <div
      className={`flex flex-row flex-wrap items-center justify-center gap-[10px] ${className}`}
    >
      {categories.map((item) => (
        <Link 
          key={item.key} 
          href={
            item.key === 'indi' ? '/individual' : 
            item.key === 'tip' ? '/typical-houses' : 
            item.key === 'comme' ? '/commerce' : '/'
          }
        >
          <CustomButton
            className={`!px-[30px] !py-6 ${selectedValue === item.title ? tabs[item.key] : ''}`}
          >
            {item.title}
          </CustomButton>
        </Link>
      ))}
    </div>
  ) : (
    <div className={`flex items-center justify-center ${className}`}>
      <Select
        value={selectedValue}
        defaultActiveFirstOption={false}
        className="m-auto !rounded-[20px] !border-primary  !font-helvetica !text-[16px] !text-primary"
        suffixIcon={<ArrowIcon />}
        size="large"
        style={{ borderRadius: 20 }}
        onChange={handleSelectChange}
        options={categories.map(item => ({
          value: item.title, 
          label: item.title,
        }))}
      />
    </div>
  );
};

export { Tabs };
