import axios from 'axios';
import store, { persistor } from 'store';

const axiosParams = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 50000,
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use(
  (config) => {
    if (store.getState().auth.token && config.url !== '/auth/login') {
      if (config.headers !== undefined) {
        config.headers['Authorization'] = 'Bearer ' + store.getState().auth.token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('login')) {
      persistor.purge();
      localStorage.removeItem('persist:root');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  },
);

const { get, post, put, delete: destroy, patch } = axiosInstance;
export { get, post, put, destroy, patch };
export default axiosInstance;
