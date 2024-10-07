export const fetchCategories = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке домов:', error);
    return [];
  }
};

export const fetchOneHouse = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/house/${id}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке домов:', error);
    return [];
  }
};


export const fetchMainImage = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/main-images/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchLSTKimage = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lstk-images/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchUniqueItems = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/unique/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load unique error', error);
    return [];
  }
}

export const fetchFeatureCarousel = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/unique/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load carousel error', error);
    return [];
  }
}

export const fetchAdvantagesCarousel = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/advantages/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchSocialMediaContent = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchBigDesription = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/big-description/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchHeroCarousel = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carousels/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}

export const fetchNavbars = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navbars/`);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('load main image error', error);
    return [];
  }
}