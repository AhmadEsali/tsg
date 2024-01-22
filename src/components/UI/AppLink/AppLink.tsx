// styles
import { ExternalLink, StyledLink } from './appLink.styles';

interface buttonProps {
  children: React.ReactNode;
  link: string;
  type: 'link' | 'href';
}
const AppLink: React.FC<buttonProps> = ({ children, link, type = 'link' }) => {
  return type === 'link' ? (
    <StyledLink to={link}>{children}</StyledLink>
  ) : (
    <ExternalLink href={link} target='_blank' rel='noreferrer'>
      {children}
    </ExternalLink>
  );
};

export default AppLink;
