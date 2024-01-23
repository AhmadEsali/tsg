// styles
import Typography from 'components/UI/Typography';
import { AddButton, HomeHeaderWrapper, NavigationContainer } from './homeHeader.styles';
import { Texts } from 'constants/texts';
import { Add, ArrowLeft, ArrowRight } from 'components/icons';

const HomeHeader = ({ setOpen }) => {
  return (
    <HomeHeaderWrapper>
      <NavigationContainer>
        <Typography variant='h1' size='2rem' color='nblue-1' weight={700}>
          01-15 Jan, 2024
        </Typography>
        <div>
          <button>
            <ArrowLeft />
          </button>
          <button>
            <ArrowRight />
          </button>
        </div>
      </NavigationContainer>
      <Typography variant='h3' color='nblue-1' opacity={0.8}>
        Use the arrows to switch back and forth through the days
      </Typography>
      <AddButton onClick={setOpen}>
        <Add />
        {Texts['tourAnlegen']}
      </AddButton>
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;
