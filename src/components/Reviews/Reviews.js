import { movieReviews } from 'api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const reviewArr = await movieReviews(movieId);
        setReview(reviewArr);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <>
      {review.length ? (
        review.map(actor => (
          <>
            <p>Author: {actor.author}</p> <p>{actor.content}</p>
          </>
        ))
      ) : (
        <p>We dont have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
