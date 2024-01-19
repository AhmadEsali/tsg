import {
  BodyText,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './typography.styles';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  color?: string;
  weight?: number;
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  opacity?: number;
  size?: string;
  font?: string;
  additionalStyles?: React.CSSProperties;
  [x: string]: any;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  weight,
  additionalStyles,
  transform = 'none',
  opacity = 1,
  size,
  font,
  children,
  ...rest
}) => {
  switch (variant) {
    case 'h1':
      return (
        <Heading1
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading1>
      );
    case 'h2':
      return (
        <Heading2
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading2>
      );
    case 'h3':
      return (
        <Heading3
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading3>
      );
    case 'h4':
      return (
        <Heading4
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading4>
      );

    case 'h5':
      return (
        <Heading5
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading5>
      );

    case 'h6':
      return (
        <Heading6
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </Heading6>
      );

    default:
      return (
        <BodyText
          color={color}
          weight={weight}
          transform={transform}
          style={additionalStyles}
          opacity={opacity}
          size={size}
          font={font}
          {...rest}
        >
          {children}
        </BodyText>
      );
  }
};

export default Typography;
