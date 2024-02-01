import { useQuery } from '@tanstack/react-query';

import { getFilms } from '../utils/api/requests';

import Rating from '@mui/material/Rating';

import Header from '/src/components/Header.jsx';

export const Root = () => {
  const getFilmsQuery = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
    select: ({ data }) => {
      return data.films.map((film) => (
        <div key={film.id} className = "card">
            <div className="film-img-container">
                <div className='release-date'><strong>{film.genres[0]}</strong><br/>{film.country.name} - {film.releaseDate}</div>
                <img className="img" src='/src/assets/kotik.jpg' alt={film.name} />
            </div>
          <div className="card-title">{film.name}</div>
          <div className="card-text">{film.description.split('.')[0] + "..."}</div>
          <div>
            <Rating name="half-rating-read" defaultValue={film.userRatings.imdb/2} precision={0.5} readOnly />
            <div className='card-text'>Kinopoisk - {film.userRatings.kinopoisk}</div>
          </div>
          <div className="card-btn"><p>Подробнее</p></div>
        </div>
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
