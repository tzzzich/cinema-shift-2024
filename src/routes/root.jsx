import { useQuery } from '@tanstack/react-query';

import { getFilms } from '../utils/api/requests';

import Header from '/src/components/header/Header.jsx';

import MovieCard from '/src/components/movie-card/MovieCard.jsx';

export const Root = () => {
  const getFilmsQuery = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
    select: ({ data }) => {
      return data.films.map((film) => (
        <MovieCard key={film.id} film={film} orientation="vertical" />
      ));
    }
  });

  if (getFilmsQuery.isLoading) return <div>loading...</div>;

  return (
    <>
    <Header/>
    <div style={{ width: '70%', margin: '0 auto' }}>
      <h1 style={{ marginLeft: '20px' }}>Афиша</h1>
      <div className='films_container'>{getFilmsQuery.data}</div>
    </div>
    </>
  );
};
