// styles
import {
  CardsWrapper,
  CloseButton,
  ColumnsWrapper,
  GroupButton,
  SelectionWrapper,
  SortableColumns,
  TourColumn,
  TourColumnHeader,
  TourItem,
} from './cardsContainer.styles';

import React, { useState } from 'react';
import Column from './Column';
import EditTourModal from 'components/Modals/EditTourModal';
import CardInfoModal from 'components/Modals/CardInfoModal';
import { CloseIcon, FolderAdd } from 'components/icons';
import Typography from 'components/UI/Typography';

const WeekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
const CardsContainer = (tours) => {
  const [open, setOpen] = useState(false);
  const [openCardInfo, setOpenCardInfo] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleEditTour = (id: string) => {
    const tour = tours.tours.find((tour) => tour.id === id);
    setSelectedTour(tour);
    setOpen(true);
  };
  return (
    <CardsWrapper>
      {selectedCards.length > 0 ? (
        <SelectionWrapper>
          <CloseButton onClick={() => setSelectedCards([])}>
            <CloseIcon />
          </CloseButton>
          <Typography variant='h3' color='navy-10' weight={400}>
            {selectedCards.length} selected
          </Typography>
          {selectedCards.length > 1 ? (
            <GroupButton>
              <FolderAdd />
              <Typography variant='h3' color='navy-10' weight={400}>
                Make a Group
              </Typography>
            </GroupButton>
          ) : null}
        </SelectionWrapper>
      ) : null}
      <ColumnsWrapper>
        <TourColumn>
          <TourColumnHeader>Tour</TourColumnHeader>
          {tours.tours.length > 0
            ? tours.tours.map((tour) => (
                <TourItem onClick={() => handleEditTour(tour.id)} key={tour.id}>
                  {tour.name}
                </TourItem>
              ))
            : null}
        </TourColumn>
        <SortableColumns>
          {React.Children.toArray(
            WeekDays.map((day, index) => (
              <Column
                index={index}
                setOpenCardInfo={setOpenCardInfo}
                day={day}
                setSelectedCards={setSelectedCards}
                selectedCards={selectedCards}
              />
            )),
          )}
          {React.Children.toArray(
            WeekDays.map((day, index) => (
              <Column
                index={index + 20}
                setOpenCardInfo={setOpenCardInfo}
                day={day}
                setSelectedCards={setSelectedCards}
                selectedCards={selectedCards}
              />
            )),
          )}
        </SortableColumns>
      </ColumnsWrapper>
      <EditTourModal
        open={open}
        setOpen={setOpen}
        setTours={tours.setTours}
        selectedTour={selectedTour}
      />
      <CardInfoModal open={openCardInfo} setOpen={setOpenCardInfo} />
    </CardsWrapper>
  );
};

export default CardsContainer;
