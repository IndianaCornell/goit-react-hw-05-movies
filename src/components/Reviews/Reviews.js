import { movieReviews } from 'api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  ReviewList,
  ReviewBox,
  ReviewDescP,
  ReviewAuthor,
} from './Reviews.styled';

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
    <ReviewList>
      {review.length ? (
        review.map(actor => (
          <ReviewBox>
            <ReviewAuthor>Author: {actor.author}</ReviewAuthor>{' '}
            <ReviewDescP>{actor.content}</ReviewDescP>
          </ReviewBox>
        ))
      ) : (
        <ReviewDescP>We dont have any reviews for this movie.</ReviewDescP>
      )}
    </ReviewList>
  );
};

export default Reviews;
