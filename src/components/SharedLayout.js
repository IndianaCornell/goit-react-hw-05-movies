import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
