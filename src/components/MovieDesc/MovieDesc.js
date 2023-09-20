import { useLocation } from 'react-router-dom';

import {
  GoBackBtn,
  MovieBoxStyled,
  MovieDescStyled,
  MovieName,
  PosterStyled,
  MovieDescP,
  MovieTit,
} from './MovieDesc.styled';

const MovieDesc = ({ desc }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, original_title, vote_average, overview, genres } = desc;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieDescStyled>
      <GoBackBtn to={backLinkHref}>Go Back</GoBackBtn>
      <MovieBoxStyled>
        <PosterStyled
          src={imgBaseUrl + poster_path}
          alt={original_title}
        ></PosterStyled>
        <div>
          <MovieName>{original_title}</MovieName>
          <MovieDescP>User score: {vote_average.toFixed(0)}%</MovieDescP>
          <MovieTit>Overview</MovieTit>
          <MovieDescP>{overview}</MovieDescP>
          <MovieTit>Genres:</MovieTit>
          <div>
            {genres.map(genre => {
              return <MovieDescP>{genre.name}</MovieDescP>;
            })}
          </div>
        </div>
      </MovieBoxStyled>
    </MovieDescStyled>
  );
};

export default MovieDesc;
