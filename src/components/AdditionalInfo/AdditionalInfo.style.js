import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnStyled = styled(Link)`
  margin-bottom: 10px;
  font-size: 15px;
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

export const AdditionalInfoStyled = styled.h4`
  font-size: 20px;
  line-height: 14px;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 2px;
  font-weight: bold;
  color: rgb(79, 69, 87);
`;
