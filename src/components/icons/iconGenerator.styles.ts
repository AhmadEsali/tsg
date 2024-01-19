import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const ReactSVGStyled = styled(ReactSVG)<{
  height?: string;
  width?: string;
  maxHeight?: string;
  maxWidth?: string;
  color?: string;
}>`
  svg {
    height: ${({ height }) => height || null};
    width: ${({ width }) => width || null};
    max-height: ${({ maxHeight }) => maxHeight || null};
    max-width: ${({ maxWidth }) => maxWidth || null};
    min-height: 5px;
    min-width: 5px;
    transition: width 0.3s linear 0s, height 0.3s linear 0s;
  }
  svg path {
    fill: ${({ color }) => color || ''};
  }
`;
