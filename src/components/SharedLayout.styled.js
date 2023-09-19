import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: rgb(79, 69, 87);
  text-decoration: none;
  border: thick double #32a1ce;
  padding: 10px;
  &.active {
    color: rgb(225, 152, 152);
  }
`;
