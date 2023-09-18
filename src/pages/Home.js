import { useState, useEffect } from 'react';

import { trendingMovies } from 'api';
import MovieList from '../components/MovieList/MovieList';

import { HomeTrendsTite } from './Home.styled';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await trendingMovies();
        if (movies.length) {
          setMovieList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <>
      <HomeTrendsTite>Trending movies</HomeTrendsTite>
      <MovieList movies={movieList} />
    </>
  );
};

export default Home;
