// styles
import { Link } from 'react-router-dom';
import { FooterWrapper } from './appfooter.styles';

const AppFooter = () => {
  return (
    <FooterWrapper>
      <span>Copyright © {new Date().getFullYear()} TSG </span>
      <span>|</span>
      <Link to='/'>
        <span>Support</span>
      </Link>
      <span>|</span>
      <Link to='/'>
        <span>Terms of Use</span>
      </Link>
      <span>|</span>
      <Link to='/'>
        <span>Privacy Policy</span>
      </Link>
    </FooterWrapper>
  );
};

export default AppFooter;
