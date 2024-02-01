import { useQuery } from '@tanstack/react-query';

import { getFilms } from '../utils/api/requests';

export const Root = () => {
  const getFilmsQuery = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
    select: ({ data }) => {
      return data.films.map((film) => (
        <div key={film.id} className={'film'}>
          <img src={film.img} alt={film.name} />
          <div>{film.name}</div>
          <div>{film.releaseDate}</div>
          <div>{film.description}</div>
          <div>
            <h4>Rating:</h4>
            <p>Kinopoisk: {film.userRatings.kinopoisk}</p>
            <p>IMDb: {film.userRatings.imdb}</p>
          </div>
        </div>
      ));
    }
  });

  if (getFilmsQuery.isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Афиша</h1>
      <div className='films_container'>{getFilmsQuery.data}</div>
    </>
  );
};
