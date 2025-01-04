import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

import {AUTH_TOKEN_HEADER, BASE_URL, TIMEOUT} from '../const.ts';
import {getToken} from './tokens.ts';


export const CreateAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers[AUTH_TOKEN_HEADER] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return api;
};
