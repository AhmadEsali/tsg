import styled from 'styled-components';
import { media } from 'styles/utils';

export const ModalBodyContainer = styled.div`
  width: 600px;

  ${media('medium')} {
    width: 400px;
  }
  ${media('small')} {
    width: 100%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
  margin-top: 16px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;

  color: rgb(var(--navy-9));
  border: ${({ hasError }) =>
    hasError ? '1.5px solid rgb(var(--red))' : '1px solid rgb(var(--navy-5))'};
  border-radius: 8px;
  padding: 13px 16px;

  //style the placeholder
  &::placeholder {
    color: rgb(var(--navy-7));
  }

  &:focus-visible {
    outline: none;
    border: 1.5px solid rgb(var(--navy-5));
  }
`;

export const Label = styled.label`
  color: rgb(var(--navy-9));
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
  display: block;

  span {
    color: rgb(var(--red));
    font-weight: 700;
    margin-left: 2px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 64px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    color: rgb(var(--red));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;
