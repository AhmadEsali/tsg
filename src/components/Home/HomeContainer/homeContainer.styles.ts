import styled from 'styled-components';
import { media } from 'styles/utils';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgb(var(--nn-nn-8));

  a {
    text-decoration: none;
    color: rgb(var(--nn-nn-8));
  }

  ${media('medium')} {
    flex-wrap: wrap;
  }
`;
