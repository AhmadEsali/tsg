// styles
import NewTourModal from 'components/Modals/NewTourModal';
import CardsContainer from '../CardsContainer';
import HomeHeader from '../HomeHeader';
import { HomeWrapper } from './homeContainer.styles';
import { useState } from 'react';

const HomeContainer = () => {
  const [open, setOpen] = useState(false);
  const [tours, setTours] = useState([
    {
      id: '1',
      name: 'A01',
    },
    {
      id: '2',
      name: 'B01',
    },
    {
      id: '3',
      name: 'C01',
    },
    {
      id: '4',
      name: 'X01',
    },
  ]);

  return (
    <HomeWrapper>
      <HomeHeader setOpen={setOpen} />
      <CardsContainer tours={tours} setTours={setTours} />
      <NewTourModal open={open} setOpen={setOpen} setTours={setTours} />
    </HomeWrapper>
  );
};

export default HomeContainer;
