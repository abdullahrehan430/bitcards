import {AxiosRequestConfig} from 'axios';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from './axios';

// TODO Should use the token in the userData context
export const httpGet = async (
  requestPath: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.get(requestPath, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpPost = async (
  requestPath: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.post(requestPath, data, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpPut = async (
  requestPath: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.put(requestPath, data, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpDelete = async (
  requestPath: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.delete(requestPath, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};
