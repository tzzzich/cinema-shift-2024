import { api } from '../instance';

export const getFilms = ({ options }) =>
  api.get('cinema/today', { ...(options && options) });