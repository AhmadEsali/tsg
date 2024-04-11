// styles
import NewTourModal from 'components/Modals/NewTourModal';
import CardsContainer from '../CardsContainer';
import HomeHeader from '../HomeHeader';
import { HomeWrapper } from './homeContainer.styles';
import { useEffect, useState } from 'react';
import { authAPI } from 'api/auth';
import { format, addDays, startOfDay, endOfDay, startOfWeek } from 'date-fns';

const HomeContainer = () => {
  const [open, setOpen] = useState(false);
  const [tours, setTours] = useState([]);
  const today = new Date();

  const [firstDate, setFirstDate] = useState(startOfDay(startOfWeek(today)));
  const [lastDate, setLastDate] = useState(endOfDay(addDays(firstDate, 14)));

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await authAPI.getTours();
      setTours(response.data.data);
    } catch (error) {
      console.log('🚀 ~ fetchTours ~ error:', error);
    }
  };
  return (
    <HomeWrapper>
      <HomeHeader
        setOpen={setOpen}
        firstDate={firstDate}
        setFirstDate={setFirstDate}
        lastDate={lastDate}
        setLastDate={setLastDate}
      />
      <CardsContainer tours={tours} setTours={setTours} firstDate={firstDate} lastDate={lastDate} />
      <NewTourModal open={open} setOpen={setOpen} fetchTours={fetchTours} />
    </HomeWrapper>
  );
};

export default HomeContainer;
