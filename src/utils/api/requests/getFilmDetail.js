import { api } from '../instance';

export const getFilmDetail = (filmId) =>
  api.get(`cinema/film/${filmId}`);