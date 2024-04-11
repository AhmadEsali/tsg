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

import { useEffect, useState } from 'react';
import EditTourModal from 'components/Modals/EditTourModal';
import CardInfoModal from 'components/Modals/CardInfoModal';
import { CloseIcon, FolderAdd } from 'components/icons';
import Typography from 'components/UI/Typography';
// import Card from './Card';
import SwapCardModal from 'components/Modals/SwapCardModal';
import { authAPI } from 'api/auth';
import { DndContext, PointerSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import Column from './Column';
import { format } from 'date-fns';

// const WeekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

const CardsContainer = ({ tours, setTours, firstDate, lastDate }) => {
  const [open, setOpen] = useState(false);
  const [openCardInfo, setOpenCardInfo] = useState(false);
  const [openSwapModal, setOpenSwapModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetchMissions();
  }, [firstDate, lastDate]);

  const handleEditTour = (id: string) => {
    const tour = tours.find((tour) => tour.id === id);
    setSelectedTour(tour);
    setOpen(true);
  };

  const fetchMissions = async () => {
    try {
      const fDate = format(firstDate, 'yyyy-MM-dd');
      const lDate = format(lastDate, 'yyyy-MM-dd');
      const response = await authAPI.getMissions(fDate, lDate);
      console.log('🚀 ~ fetchMissions ~ response:', response.data);
      if (response.status === 200) {
        setMissions(response.data.data ? response.data.data : []);
        // const modifiedData = {};

        // console.log(Object.entries(response.data.data));

        // Object.entries(response.data.data).forEach(([key, value]) => {
        //   // covert the key to day
        //   const date = new Date(key);
        //   const day = date.toLocaleDateString('de-DE', { weekday: 'long' });

        //   modifiedData[day] = value;
        // });
        // console.log('🚀 ~ missions=Object.entries ~ missions:', modifiedData);
        // setMissions(modifiedData)
      }
    } catch (error) {
      console.log('🚀 ~ fetchTours ~ error:', error);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  const handleDragend = (event) => {
    console.log('🚀 ~ handleDragend ~ event:', event);
    const { active, over } = event;
    if (over && active.id === over.id) {
      return;
    }

    const activeIndex = missions.findIndex((mission) => mission.id === active.id);
    const overIndex = missions.findIndex((mission) => mission.id === over.id);
    const newMissions = [...missions];
    newMissions.splice(activeIndex, 1);
    newMissions.splice(overIndex, 0, missions[activeIndex]);
    setMissions(newMissions);
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
          {tours.length > 0
            ? tours.map((tour) => (
                <TourItem onClick={() => handleEditTour(tour.id)} key={tour.id}>
                  {tour.name}
                </TourItem>
              ))
            : null}
        </TourColumn>
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragend} sensors={sensors}>
          <SortableColumns>
            <Column
              day='Montag'
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              setOpenSwapModal={setOpenSwapModal}
              missions={missions}
              setSelectedCard={setSelectedCard}
              ddddd={'first'}
            />
            <Column
              day='Dienstag'
              setOpenCardInfo={setOpenCardInfo}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              setOpenSwapModal={setOpenSwapModal}
              missions={missions}
              setSelectedCard={setSelectedCard}
              ddddd={'Dienstag'}
            />
            <SortableColumn>
              <Typography variant='h2' color='navy-13' weight={700}>
                Mittwoch
              </Typography>
            </SortableColumn>
            <SortableColumn>
              <Typography variant='h2' color='navy-13' weight={700}>
                Donnerstag
              </Typography>
            </SortableColumn>
            <SortableColumn>
              <Typography variant='h2' color='navy-13' weight={700}>
                Freitag
              </Typography>
            </SortableColumn>
          </SortableColumns>
        </DndContext>
      </ColumnsWrapper>
      <EditTourModal
        open={open}
        setOpen={setOpen}
        setTours={setTours}
        selectedTour={selectedTour}
      />
      <CardInfoModal open={openCardInfo} setOpen={setOpenCardInfo} selectedCard={selectedCard} />
      <SwapCardModal open={openSwapModal} setOpen={setOpenSwapModal} selectedCard={selectedCard} />
    </CardsWrapper>
  );
};

export default CardsContainer;
