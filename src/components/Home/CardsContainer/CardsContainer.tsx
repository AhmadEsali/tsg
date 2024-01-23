// styles
import {
  CardsWrapper,
  CloseButton,
  ColumnsWrapper,
  GroupButton,
  SelectionWrapper,
  SortableColumn,
  SortableColumns,
  TourColumn,
  TourColumnHeader,
  TourItem,
} from './cardsContainer.styles';

import { useState } from 'react';
// import Column from './Column';
import EditTourModal from 'components/Modals/EditTourModal';
import CardInfoModal from 'components/Modals/CardInfoModal';
import { CloseIcon, FolderAdd } from 'components/icons';
import Typography from 'components/UI/Typography';
import Card from './Card';

// const WeekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
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
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Montag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={0}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={1}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={2}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={3}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Dienstag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={4}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={5}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={6}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={7}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Mittwoch
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={8}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={9}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={10}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={11}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Donnerstag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={12}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={13}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={14}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={15}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Freitag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={16}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={17}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={18}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={19}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Samstag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={20}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={21}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={22}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={23}
              selectedCards={selectedCards}
            />
          </SortableColumn>
          <SortableColumn>
            <Typography variant='h2' color='navy-13' weight={700}>
              Sonntag
            </Typography>

            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={24}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={25}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={26}
              selectedCards={selectedCards}
            />
            <Card
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              id={27}
              selectedCards={selectedCards}
            />
          </SortableColumn>
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
