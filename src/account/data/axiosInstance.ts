import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/'
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
