import styled from 'styled-components';

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  color: rgb(var(--nn-nn-8));
`;
export const Progress = styled.progress`
  width: 100%;
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    border-radius: 7px;
    -webkit-animation: animate-stripes 5s linear infinite;
    animation: animate-stripes 5s linear infinite;
  }

  &[value]::-webkit-progress-bar {
    background-color: rgb(var(--np-np-6));
    border-radius: 7px;
  }

  &[value]::-webkit-progress-value {
    background-color: rgb(var(--purple));
    border-radius: 7px;
  }
`;
