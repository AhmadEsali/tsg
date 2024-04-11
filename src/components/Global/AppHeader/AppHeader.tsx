// styles
import Typography from 'components/UI/Typography';
import { HeaderWrapper, Logo, UserArea, UserAvatar } from './appHeader.styles';
import LogoImage from 'assets/img/logo.png';
import { ArrowDown } from 'components/icons';
import { useAppSelector } from 'store';
const AppHeader = () => {
  const name = useAppSelector((state) => state.auth?.name);
  return (
    <HeaderWrapper>
      <Logo src={LogoImage} alt='logo' />
      <UserArea>
        <UserAvatar>{name?.charAt(0).toUpperCase()}</UserAvatar>
        <Typography variant='h3' color='navy-13' weight={700}>
          {name}
        </Typography>
        <ArrowDown />
      </UserArea>
    </HeaderWrapper>
  );
};

export default AppHeader;
