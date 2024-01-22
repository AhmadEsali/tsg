import styled from 'styled-components';
import header from 'assets/img/header.jpeg';

export const HomeHeaderWrapper = styled.div`
  /* background:
    linear-gradient(90deg, #0473b0 0%, rgba(4, 115, 176, 0) 97.92%),
    url('${header}'),
    lightgray 50% / cover no-repeat,
    #0473b0;
 */

  background:
    linear-gradient(90deg, #0473b0 0%, rgba(4, 115, 176, 0) 97.92%),
    url('${header}') 50% 50% / cover no-repeat,
    lightgray 50% / cover no-repeat;
  padding: 24px 64px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const AddButton = styled.button`
  display: flex;
  padding: 8px 24px 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #fff;
  color: #0473b0;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f0f7fa;
  }
`;
