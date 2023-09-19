import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

export const MovieBox = styled.li`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 8px 4px 12px 0px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 8px 4px 12px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 8px 4px 12px 0px rgba(0, 0, 0, 0.44);
`;

export const MovieLink = styled(NavLink)`
  font-size: 9px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: rgb(79, 69, 87);
  text-decoration: none;
  padding: 10px;
`;
