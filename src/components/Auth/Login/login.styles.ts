import styled from 'styled-components';
import LoginPoster from 'assets/img/login-page-image.jpeg';
import { media } from 'styles/utils';

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
`;

export const ImageContainer = styled.div`
  max-height: 100%;
  background:
    linear-gradient(90deg, #4175fc -76.23%, rgba(4, 115, 176, 0) 96.33%),
    linear-gradient(0deg, rgba(16, 18, 24, 0.5) 0%, rgba(16, 18, 24, 0.5) 100%),
    url('${LoginPoster}') 0% 0% / cover no-repeat,
    lightgray 50% / cover no-repeat;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 135px 131px 0 104px;
  gap: 3em;

  ${media('medium')} {
    display: none;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 4px;
  color: #fff;

  a {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none;
  }
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  padding: 135px 131px 0 104px;
`;

export const Form = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 512px;
`;
