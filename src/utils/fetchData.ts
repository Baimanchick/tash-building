
export const fetchCategories = async () => {
  try {
    const response = await fetch('https://michelle-kg.online/categories/');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    return []; 
  }
};


export const fetchHouse = async (id: number) => {
  try {
    const response = await fetch(`https://michelle-kg.online/categories/${id}/`)
    // console.log(response);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = response.json()
    return data
  } catch (error) {
    console.error('Ошибка при загрузке домов:', error);
    return []
  }
}

export const fetchOneHouse = async (id: number) => {
  try {
    const response = await fetch(`https://michelle-kg.online/house/${id}/`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = response.json()
    return data
  } catch (error) {
    console.error('Ошибка при загрузке домов:', error);
    return []
  }
}