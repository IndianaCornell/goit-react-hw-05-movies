import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional information</h4>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
