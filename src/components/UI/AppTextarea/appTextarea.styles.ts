import styled from 'styled-components';
import { space, fontSize, color } from 'styled-system';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TextArea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;

  color: rgb(var(--nn-nn-10));
  border: ${({ hasError }) =>
    hasError ? '1.5px solid rgb(var(--red))' : '1px solid rgb(var(--light-grey-500))'};
  border-radius: 8px;
  padding: 13px 16px;

  //style the placeholder
  &::placeholder {
    color: rgb(var(--nn-nn-7));
  }

  &:focus-visible {
    outline: none;
    border: 1.5px solid rgb(var(--purple));
  }
  &:not(:placeholder-shown) {
    border: 1.5px solid rgb(var(--purple));
  }

  ${space};
  ${fontSize};
  ${color}
`;

export const Label = styled.label`
  color: rgb(var(--nn-nn-9));
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 8px;
  display: block;
  font-family: var(--secondary-font);

  span {
    color: rgb(var(--red));
    font-weight: 700;
    margin-left: 2px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  p {
    color: rgb(var(--red));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;
