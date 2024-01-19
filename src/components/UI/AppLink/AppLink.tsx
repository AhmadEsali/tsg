// styles
import { StyledLink } from './appLink.styles';

interface buttonProps {
  children: React.ReactNode;
  link: string;
}
const AppLink: React.FC<buttonProps> = ({ children, link }) => {
  return <StyledLink to={link}>{children}</StyledLink>;
};

export default AppLink;
