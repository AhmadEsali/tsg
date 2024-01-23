// styles
import CardsContainer from '../CardsContainer';
import HomeHeader from '../HomeHeader';
import { HomeWrapper } from './homeContainer.styles';

const HomeContainer = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <CardsContainer />
    </HomeWrapper>
  );
};

export default HomeContainer;
