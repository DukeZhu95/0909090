import axios, { AxiosRequestConfig } from 'axios';
import { toastShow } from './toast';

const baseURL = process.env.EXPO_PUBLIC_API_URL;
axios.defaults.baseURL = baseURL;

axios.defaults.withCredentials = true;

// 定义 CustomConfig 接口
interface CustomConfig extends AxiosRequestConfig {
  showErrorMsg?: boolean;
}

// request interceptor
const getUserToken = () => {
  // 实现从安全存储获取用户令牌的逻辑
  return 'your_dynamic_token_here';
};

axios.interceptors.request.use(
  (config) => {
    const userToken = getUserToken();
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  (response) => {
    const { config, data } = response;
    const customConfig = config as CustomConfig;
    const showErrorMsg = customConfig.showErrorMsg !== false; // 默认为 true

    if (data.code !== 200) {
      console.error('API Error:', data);
      if (showErrorMsg) {
        toastShow(data.msg || 'An error occurred');
      }
      return Promise.reject({code: data.code, msg: data.msg || 'Error'});
    } else {
      return data;
    }
  },
  (error) => {
    console.error('Axios Error:', error.response?.data || error.message);
    toastShow(error.response?.data?.msg || error.message || 'An error occurred');
    return Promise.reject({ code: error.response?.status || 1000, msg: error.response?.data?.msg || error.message });
  }
);

export default axios;