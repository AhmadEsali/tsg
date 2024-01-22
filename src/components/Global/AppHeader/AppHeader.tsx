// styles
import Typography from 'components/UI/Typography';
import { HeaderWrapper, Logo, UserArea, UserAvatar } from './appHeader.styles';
import LogoImage from 'assets/img/logo.png';
import { ArrowDown } from 'components/icons';
const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Logo src={LogoImage} alt='logo' />
      <UserArea>
        <UserAvatar>JD</UserAvatar>
        <Typography variant='h3' color='navy-13' weight={700}>
          John Doe
        </Typography>
        <ArrowDown />
      </UserArea>
    </HeaderWrapper>
  );
};

export default AppHeader;
