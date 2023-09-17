import { Link } from 'react-router-dom';

const TrendingMovie = ({ movies }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={imgBaseUrl + movie.poster_path}
                alt={movie.original_title}
              ></img>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovie;
