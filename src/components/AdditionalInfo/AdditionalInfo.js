import { Link, Outlet } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional information</h4>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default AdditionalInfo;
