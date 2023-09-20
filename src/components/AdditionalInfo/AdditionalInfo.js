import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { BtnStyled, AdditionalInfoStyled } from './AdditionalInfo.style';

const AdditionalInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <AdditionalInfoStyled>Additional information</AdditionalInfoStyled>
      <BtnStyled to="cast" state={{ from: backLinkHref }}>
        Cast
      </BtnStyled>
      <BtnStyled to="reviews" state={{ from: backLinkHref }}>
        Reviews
      </BtnStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
