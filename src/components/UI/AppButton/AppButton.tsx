// third party imports
import { Oval } from 'react-loader-spinner';

// styles
import { StyledButton } from './appbutton.styles';

interface buttonProps {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  customColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg'; // xs, sm, md, lg
  disabled?: boolean;
  loader?: boolean;
  fullWidth?: boolean;
  [x: string]: any;
}
const AppButton: React.FC<buttonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loader = false,
  fullWidth = false,
  customColor = '',
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      loader={loader}
      customColor={customColor}
      fullWidth={fullWidth}
      {...rest}
    >
      {loader ? <Oval wrapperClass='loader' color='#fff' height={20} width={20} /> : children}
    </StyledButton>
  );
};

export default AppButton;
