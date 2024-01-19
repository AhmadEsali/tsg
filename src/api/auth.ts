import { post } from 'config/axios';
import { ILoginData, IRegisterData } from 'types';

export const authAPI = {
  login: (data: ILoginData) => post('auth/login', data),
  register: (data: IRegisterData) => post('auth/register', data),
};
