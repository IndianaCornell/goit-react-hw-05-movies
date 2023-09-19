import { useLocation } from 'react-router-dom';

import { MovieBox, MovieListStyled, MovieLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();

  return (
    <MovieListStyled>
      {movies.map(movie => {
        return (
          <MovieBox key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={imgBaseUrl + movie.poster_path}
                alt={movie.original_title}
              ></img>
              <h2>{movie.title}</h2>
            </MovieLink>
          </MovieBox>
        );
      })}
    </MovieListStyled>
  );
};

export default MovieList;
