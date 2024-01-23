import styled from 'styled-components';
import { media } from 'styles/utils';

export const ModalBodyContainer = styled.div`
  width: 1200px;

  ${media('large')} {
    width: 800px;
  }

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
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 64px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const Tag = styled.span`
  display: flex;
  width: 64px;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: rgb(var(--nblue-13));
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const LinkInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: rgb(var(--nblue-5));
  padding: 5px 16px;
`;

export const DataWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
export const DataItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const CardDescription = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
