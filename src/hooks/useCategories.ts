'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fetchCategories } from '../utils/fetchData';

export const useCategories = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);

      const currentCategory = fetchedCategories.find((item: any) => {
        const pathMap: any = {
          indi: '/individual',
          tip: '/typical-houses',
          comme: '/commerce',
        };

        return pathname === pathMap[item.key];
      });

      if (currentCategory) {
        setSelectedValue(currentCategory.title);
      }
    };

    loadCategories();
  }, [pathname]);

  return { categories, selectedValue, setSelectedValue, pathname };
};
