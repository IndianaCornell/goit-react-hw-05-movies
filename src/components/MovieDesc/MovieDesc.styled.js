import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: rgb(79, 69, 87);
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: rgb(225, 152, 152);
  }
`;

export const MovieDescStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MovieBoxStyled = styled.div`
  display: flex;
`;

export const PosterStyled = styled.img`
  margin-right: 20px;
  border-radius: 20px;
`;

export const MovieName = styled.h2`
  font-size: 20px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: rgb(79, 69, 87);
`;

export const MovieDescP = styled.p`
  color: rgb(63, 29, 56);
  font-family: 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
`;

export const MovieTit = styled.h3`
  font-size: 15px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: rgb(79, 69, 87);
`;
