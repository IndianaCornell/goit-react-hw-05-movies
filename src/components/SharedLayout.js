import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { NavStyled, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <NavStyled>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
