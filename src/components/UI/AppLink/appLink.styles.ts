import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { space, fontSize, color } from 'styled-system';

export const StyledLink = styled(Link)`
  color: rgb(var(--green));
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: rgb(var(--green-800));

    svg path {
      fill: rgb(var(--green-800));
    }
  }
  ${space};
  ${fontSize};
  ${color}
`;
