import styled from 'styled-components';
import { media } from 'styles/utils';

export const DashboardLayoutWrapper = styled.div`
  background-color: rgb(var(--light-grey-5));
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';

  ${media('medium')} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'footer';
    padding-bottom: 70px;
  }
`;

export const MainContent = styled.main`
  grid-area: content;
`;
