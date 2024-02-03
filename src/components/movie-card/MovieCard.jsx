import PropTypes from 'prop-types';
import './MovieCard.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

import { BASEURL } from '../../utils/constants/baseUrl';

import MovieCardDescription from './MovieCardDescription';


const MovieCard = ({film, orientation}) => {
  const year = film.releaseDate && film.releaseDate !== '-' ? film.releaseDate.substr(film.releaseDate.length - 4) : '';
  const countryYear = year ? film.country.name + ', ' + year : film.country.name

  const imageUrl = `${BASEURL}${film.img}`;

  const formatClassName = "moviecard " + orientation;

  const ChangingComponent = ({ isButton }) => {
    return (
      <>
        {isButton ? (
          <Link to={`/film/${film.id}`}><div className="moviecard__btn">Подробнее</div></Link>
        ) : (
          <MovieCardDescription description={film.description} />
        )}
      </>
    );
  };

  return (
    <div className={formatClassName}>
      <div className="moviecard__img-container">
          <div className='moviecard__info-block'><strong>{film.genres[0]}</strong><br/>{countryYear}</div>
          <img src ={imageUrl} alt={film.name} />
      </div>
      
      <div className="moviecard__info-wrapper">
        <div className="moviecard__description-wrapper">
          <div className="moviecard__title">{film.name}</div>
          <div className="moviecard__text">{film.originalName}</div>
        </div>
        
        <div className="moviecard__rating-wrapper">
          <Rating name="half-rating-read" defaultValue={film.userRatings.imdb/2} precision={0.5} readOnly />
          <div className='moviecard__text'>Kinopoisk - {film.userRatings.kinopoisk}</div>
        </div>
        <ChangingComponent isButton={orientation === 'vertical'}/>
      </div>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    userRatings: PropTypes.shape({
      imdb: PropTypes.number,
      kinopoisk: PropTypes.number
    }),
    country: PropTypes.shape({
      name: PropTypes.string
    }),
    genres: PropTypes.array,
    releaseDate: PropTypes.string
  }),
};