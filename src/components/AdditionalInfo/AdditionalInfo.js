import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { BtnStyled, AdditionalInfoStyled } from './AdditionalInfo.style';

const AdditionalInfo = () => {
  return (
    <>
      <AdditionalInfoStyled>Additional information</AdditionalInfoStyled>
      <BtnStyled to="cast">Cast</BtnStyled>
      <BtnStyled to="reviews">Reviews</BtnStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
