import styled, { css } from 'styled-components';
import { space, fontSize, color } from 'styled-system';

const MD = css`
  font-weight: 700;
  font-size: 1.6rem;
  padding: 9px 64px;
`;

const SM = css`
  padding: 7px 24px;
  font-weight: 700;
  font-size: 1.6rem;
`;
const XS = css``;
const LG = css``;

const PRIMARY = css`
  background-color: rgb(var(--nblue-13));
  border: 1px solid var(--blue-400, #6791fd);

  color: #ffffff;
  border: none;

  &:hover {
    background-color: rgb(var(--blue-600));
  }
`;

const TEXT = css`
  background-color: transparent;
  border: none;
  color: rgb(var(--green));
  padding: 0;
  &:hover {
    color: rgb(var(--green-800));
  }
`;

const SECONDARY = css`
  background-color: #f0f7fa;
  color: #0473b0;
  border: none;
`;

const OUTLINE = css`
  background-color: #fff;
  color: rgb(var(--nn-nn-10));
  transition: all 0.2s ease-in-out;
  border: 1.4px solid rgb(var(--nn-nn-10));

  &:hover {
    border: 1px solid rgb(var(--nn-nn-10));
    background-color: rgb(var(--nn-nn-10));
    color: #fff;
  }
`;

export const StyledButton = styled.button<{
  variant: 'primary' | 'secondary' | 'outline' | 'text';
  size: string;
  loader: boolean;
  customColor?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}>`
  border-radius: 100px;
  cursor: pointer;

  text-decoration: none;
  display: block;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  ${({ size }) => (size === 'sm' ? SM : size === 'xs' ? XS : size === 'lg' ? LG : MD)};

  ${({ variant }) =>
    variant === 'secondary'
      ? SECONDARY
      : variant === 'outline'
        ? OUTLINE
        : variant === 'text'
          ? TEXT
          : PRIMARY};

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:disabled {
    background-color: rgb(var(--navy-7));
    color: white;
  }
  div.loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${space};
  ${fontSize};
  ${color}
`;
