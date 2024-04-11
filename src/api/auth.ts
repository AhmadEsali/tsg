import { destroy, get, post, put } from 'config/axios';
import { ILoginData } from 'types';

export const authAPI = {
  login: (data: ILoginData) => post('auth/login', data),
  getTours: () => get('tours'),
  updateTours: (newName, id) => put(`tours/${id}`, { name: newName }),
  createTour: (name) => post('tours', { name }),
  deleteTour: (id) => destroy(`tours/${id}`),
  getMissions: (firstDate, lastDate) => get(`missions?firstDate=${firstDate}&lastDate=${lastDate}`),
  updateMissionDate: (date, id) => put(`missions/${id}`, { date }),
};
