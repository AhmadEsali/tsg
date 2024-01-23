// styles
import {
  CardsWrapper,
  SortableColumns,
  TourColumn,
  TourColumnHeader,
  TourItem,
} from './cardsContainer.styles';

import React from 'react';
import Column from './Column';

const WeekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
const CardsContainer = () => {
  const [tours, setTours] = React.useState([
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

  const handleEditTour = (id: string) => {
    console.log('edit tour', id);
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };
  return (
    <CardsWrapper>
      <TourColumn>
        <TourColumnHeader>Tour</TourColumnHeader>
        {tours.map((tour) => (
          <TourItem onClick={() => handleEditTour(tour.id)} key={tour.id}>
            {tour.name}
          </TourItem>
        ))}
      </TourColumn>
      <SortableColumns>
        {React.Children.toArray(WeekDays.map((day) => <Column day={day} />))}
        {React.Children.toArray(WeekDays.map((day) => <Column day={day} />))}
      </SortableColumns>
    </CardsWrapper>
  );
};

export default CardsContainer;
