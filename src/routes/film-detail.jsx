import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

import { getFilmDetail } from '../utils/api/requests';

import Header from '/src/components/header/Header.jsx';
import MovieCard from '/src/components/movie-card/MovieCard.jsx';

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
      });
    
      if (getFilmDetailQuery.isLoading || getScheduleQuery.isLoading) {
        return <div>Loading...</div>;
      }
    

    return (
        <>
          <Header />
          <div style={{ width: '70%', margin: '0 auto' }}>
            <MovieCard film={getFilmDetailQuery.data} orientation="horizontal" />
            
            {/*<ScheduleComponent schedule={schedule} />*/}
          </div>
        </>
    );
};