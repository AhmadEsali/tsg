import styled from 'styled-components';

export const CardsWrapper = styled.div`
  padding: 24px 0 64px 64px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TourColumn = styled.div`
  width: 88px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgb(var(--nblue-11));
`;
export const TourColumnHeader = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
export const TourItem = styled.div`
  display: flex;
  padding: 5px 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  background: #fff;
  color: rgb(var(--navy-10));
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  cursor: pointer;
  margin-bottom: 95px;
`;

export const SortableColumns = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 12px;
`;
export const SortableColumn = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  background: rgb(var(--nblue-5));
  min-width: 264px;
`;
export const ColumnHeader = styled.div``;

export const CardHover = styled.div`
  padding: 12px;
  border-radius: 8px;
  background: rgba(16, 18, 24, 0.8);
  box-shadow: 4px 4px 30px 0px rgba(16, 18, 24, 0.1);
  backdrop-filter: blur(25px);
  width: 286px;

  position: absolute;
  z-index: 9;
  bottom: 100%;
  right: 50%;
`;

export const CardActions = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  gap: 8px;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out; /* Add a smooth transition effect */
`;
export const ShowInfo = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const SwapCard = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const ColumnCard = styled.div<{
  selected?: boolean;
}>`
  position: relative;
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
  position: relative;
  border: ${({ selected }) => (selected ? '2px solid rgb(var(--nblue-13))' : 'none')};
  &:hover {
    ${CardActions} {
      opacity: 1;
    }
  }
`;

export const HoverTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TitleTag = styled.span`
  border-radius: 4px;
  background: rgb(var(--nblue-13));
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  display: flex;
  padding: 2px 8px;
  align-items: center;
  justify-content: center;
`;

export const HoverValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ValueItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const HoverDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SelectionWrapper = styled.div`
  border-radius: 100px;
  padding: 16px 24px;
  background: rgb(var(--nblue-5));
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const GroupButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
