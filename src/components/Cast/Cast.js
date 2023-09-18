import { movieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const result = async () => {
      try {
        const cast = await movieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <>
      {credits.length ? (
        <>
          {credits.slice(0, 10).map(actor => {
            return (
              <div key={actor.id}>
                <img
                  src={imgBaseUrl + actor.profile_path}
                  alt={actor.original_name}
                ></img>
                <h4>{actor.original_name}</h4>
              </div>
            );
          })}
        </>
      ) : (
        <p>We dont have any information about cast in this movie.</p>
      )}
    </>
  );
};

export default Cast;
