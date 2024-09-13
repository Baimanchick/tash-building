'use client'

import { useEffect, useState } from "react"
import { useCategories } from "./useCategories"
import { fetchHouse } from "@/utils/fetchData"

export const useHouse = () => {
  const [house, setHouse] = useState<any>('')
  const { categories, selectedValue, pathname } = useCategories()

  const selectedCategory = categories.find((item: any) => selectedValue === item.title)

  useEffect(() => {    
      const loadHouses = async () => {
        try {
          const fetchedHouses = await fetchHouse(selectedCategory.id)          
          setHouse(fetchedHouses)
        } catch (error) {
          console.error("Error fetching houses:", error)
        }
      }
      loadHouses()
  }, [selectedCategory])

  return { house, categories, pathname }
}