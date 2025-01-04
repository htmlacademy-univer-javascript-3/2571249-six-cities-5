import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const CreateAPI = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
