// styles
import Typography from 'components/UI/Typography';
import { AddButton, HomeHeaderWrapper, NavigationContainer } from './homeHeader.styles';
import { Texts } from 'constants/texts';
import { Add, ArrowLeft, ArrowRight } from 'components/icons';
import { format, addDays, startOfDay, endOfDay, startOfWeek } from 'date-fns';
import { useState } from 'react';

const HomeHeader = ({ setOpen, firstDate, lastDate, setFirstDate, setLastDate }) => {
  // Format the dates
  const formattedFirstDate = format(firstDate, 'dd-MM MMM, yyyy');
  const formattedLastDate = format(lastDate, 'dd-MM MMM, yyyy');

  const combinedDates = `${formattedFirstDate} - ${formattedLastDate}`;

  const handlePreviousDate = () => {
    // Calculate the previous week
    const newFirstDate = startOfDay(addDays(firstDate, -7));
    const newLastDate = endOfDay(addDays(newFirstDate, 14));

    setFirstDate(newFirstDate); // [3]
    setLastDate(newLastDate); // [4]
  };

  const handleNextDate = () => {
    // Calculate the next week
    const newFirstDate = startOfDay(addDays(firstDate, 7));
    const newLastDate = endOfDay(addDays(newFirstDate, 14));

    setFirstDate(newFirstDate); // [5]
    setLastDate(newLastDate); // [6]
  };
  return (
    <HomeHeaderWrapper>
      <NavigationContainer>
        <Typography variant='h1' size='2rem' color='nblue-1' weight={700}>
          {combinedDates}
        </Typography>
        <div>
          <button onClick={handlePreviousDate}>
            <ArrowLeft />
          </button>
          <button onClick={handleNextDate}>
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
