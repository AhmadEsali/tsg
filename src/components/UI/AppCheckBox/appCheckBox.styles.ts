import styled from 'styled-components';

// CheckBoxContainer
export const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  input[type='checkbox'] {
    height: 15px;
    width: 15px;
    accent-color: rgb(var(--purple));
  }

  /* span {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  } */

  /* input[type='checkbox']:checked + span {
    background-color: #007bff;
    /* border-color: #007bff;
  } */

  /* span::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 7px;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }

  input[type='checkbox']:checked + span::after {
    display: block;
  } */
`;
