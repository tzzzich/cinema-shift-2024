import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

import { getSchedule } from '../utils/api/requests/index.js';
import { getFilmDetail } from '../utils/api/requests/index.js';


import MovieCard from '/src/components/movie-card/MovieCard.jsx';
import Schedule from '../components/schedule/Schedule.jsx';

export const FilmDetail = () => {
    const { id } = useParams();

    const getFilmDetailQuery = useQuery({
      queryKey: ['film', id],
      queryFn: () => getFilmDetail(id),
      select: ({ data }) => {
        return data.film;
      }
    });
    
    const getScheduleQuery = useQuery({
      queryKey: ['schedule', id],
      queryFn: () => getSchedule(id),
      select: ({ data }) => {
        return data.schedules;
      }
    });
  
    if (getFilmDetailQuery.isLoading || getScheduleQuery.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="movie-card-extended">
        <MovieCard film={getFilmDetailQuery.data} orientation="horizontal" />
        
        <Schedule schedules={getScheduleQuery.data} />
      </div>
    );
};
