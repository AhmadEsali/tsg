import styled from 'styled-components';

export const AppSelectWrapper = styled.div`
  .app-select__control {
    border: 1px solid rgb(var(--light-grey-500));
    border-radius: 8px;
    height: 47px;

    /* box-shadow: 0 0 0 1px rgb(var(--purple)); */
    &:hover {
      border: 1px solid rgb(var(--light-grey-500));
    }
  }
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
