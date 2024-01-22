import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 32px 64px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 76px;
  height: 32px;
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const UserAvatar = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0473b0;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
