import axios, {AxiosInstance} from 'axios';
import {BASE_URL, TIMEOUT} from '../const.ts';


export const CreateAPI = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
