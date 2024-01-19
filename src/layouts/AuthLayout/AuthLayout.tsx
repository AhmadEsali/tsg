// styles
import { AuthLayoutWrapper } from './authLayout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};

export default AuthLayout;
