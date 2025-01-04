import {AUTH_TOKEN_KEY_NAME} from '../const.ts';


export const getToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const setToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
