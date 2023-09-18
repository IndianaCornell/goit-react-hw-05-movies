const MovieCard = ({ desc }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, original_title, vote_average, overview, genres } = desc;
  return (
    <>
      <img src={imgBaseUrl + poster_path} alt={original_title}></img>
      <h2>{original_title}</h2>
      <p>User score: {vote_average.toFixed(0)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <>
        {genres.map(genre => {
          return genre.name;
        })}
      </>
    </>
  );
};

export default MovieCard;