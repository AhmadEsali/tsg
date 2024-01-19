import styled from 'styled-components';
import { media } from 'styles/utils';

export const AuthLayoutWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 90px;
  flex-wrap: wrap;
  gap: 30px;
  ${media('large')} {
    padding: 64px 16px;
    flex-direction: column;
    gap: 64px;
    max-width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: none;
  ${media('large')} {
    display: block;
  }
`;
export const ImageWrapper = styled.div`
  ${media('large')} {
    display: none;
  }
`;
