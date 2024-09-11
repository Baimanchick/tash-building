// tools/api.ts
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tashbackend.serveo.net',
  timeout: 5000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json', // Corrected 'ContentType' to 'Content-Type'
    // Add all custom headers here
  },
});

export const fetchData = async <T>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<T> => {
  try {
    const response = await axiosInstance(url, options);
    return response.data as T;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};
