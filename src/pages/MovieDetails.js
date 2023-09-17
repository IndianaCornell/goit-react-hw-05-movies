import { movieDetails } from 'api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [movieDesc, setMovieDesc] = useState([]);
  const { movieId } = useParams();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await movieDetails(movieId);
        setMovieDesc(movie);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const { poster_path, original_title, popularity, overview, genres } =
    movieDesc;

  return (
    <>
      <>
        <img
          src={imgBaseUrl + poster_path}
          alt={movieDesc.original_title}
        ></img>
        <h2>{original_title}</h2>
        <p>User score: {popularity.toFixed(1)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
      </>
      <AdditionalInfo />
    </>
  );
};

export default MovieDetails;
