import styled from 'styled-components';

export const AppSwitchWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const Switch = styled.label`
  position: relative;
  display: inline-block;

  width: 44px;
  height: 22px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  //when the input is disabled change the cursoer point

  input {
    cursor: not-allowed;
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #c3c4ca;
    transition: 0.4s;
    border-radius: 16px;
  }

  input:disabled + span {
    cursor: not-allowed;
  }
  span:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    bottom: 50%;
    transform: translateY(50%);
  }

  input:checked + span {
    background-color: rgb(var(--purple));
  }

  input:focus + span {
    box-shadow: 0 0 1px var(--purple);
  }

  input:checked + span:before {
    transform: translate(21px, 50%);
  }

  span.round {
    border-radius: 34px;
  }

  span.round:before {
    border-radius: 50%;
  }
`;

export const Label = styled.span`
  color: rgb(var(--nn-nn-8));
  font-family: var(--secondary-font);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
`;
