import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { space, fontSize, color } from 'styled-system';

export const StyledLink = styled(Link)`
  color: rgb(var(--blue-600));
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: rgb(var(-blue-700));
  }
  ${space};
  ${fontSize};
  ${color}
`;

export const ExternalLink = styled.a`
  color: rgb(var(--blue-600));
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: rgb(var(-blue-700));
  }
  ${space};
  ${fontSize};
  ${color}
`;
