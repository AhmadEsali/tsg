import styled from 'styled-components';
import { space } from 'styled-system';

interface TypographyProps {
  color?: string;
  weight?: number;
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  opacity?: number;
  size?: string;
  font?: string;
}
export const Heading1 = styled.h1<TypographyProps>`
  font-size: ${(props) => props.size || '2.2rem'};
  font-weight: ${({ weight }) => (weight ? weight : 600)};

  text-transform: ${({ transform }) => (transform ? transform : 'none')};

  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};
  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const Heading2 = styled.h2<TypographyProps>`
  font-size: ${(props) => props.size || '1.8rem'};
  font-weight: ${({ weight }) => (weight ? weight : 600)};

  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};
  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const Heading3 = styled.h3<TypographyProps>`
  font-size: 1.6rem;
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};
  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const Heading4 = styled.h4<TypographyProps>`
  font-size: 1.5rem;
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};

  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const Heading5 = styled.h5<TypographyProps>`
  font-size: 1.4rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};

  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const Heading6 = styled.h6<TypographyProps>`
  font-size: 1.2rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--main-font)')};

  color: ${(props) =>
    props.color
      ? `rgba(var(--${props.color}),${props.opacity})`
      : `rgba(var(--nn-nn-8),${props.opacity})`};
  ${space};
`;

export const BodyText = styled.p<TypographyProps>`
  font-size: 1.6rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-transform: ${({ transform }) => (transform ? transform : 'none')};
  font-family: ${({ font }) => (font ? `var(--${font})` : 'var(--secondary-font)')};

  color: ${(props) =>
    props.color ? `rgba(var(--${props.color}))` : `rgba(var(--nn-nn-8), ${props.opacity})`};
  ${space};
  line-height: 140%;
  ${space};
`;
