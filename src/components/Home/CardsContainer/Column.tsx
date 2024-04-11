import Typography from 'components/UI/Typography';
import { SortableColumn } from './cardsContainer.styles';
import Card from './Card';
// import { v4 as uuidv4 } from 'uuid';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
const Column = ({
  day,
  setOpenCardInfo,
  setSelectedCards,
  selectedCards,
  setSelectedCard,
  setOpenSwapModal,
  missions,
  ddddd,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${day}`,
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };
  console.log('🚀 ~ style:', style);
  return (
    <SortableColumn ref={setNodeRef}>
      <Typography variant='h2' color='navy-13' weight={700}>
        {day}
      </Typography>
      <SortableContext items={missions} strategy={verticalListSortingStrategy}>
        {missions.length > 0
          ? missions.map((mission) => {
              if (ddddd === 'first' && mission.id > 4) return;
              if (ddddd !== 'first' && mission.id <= 4) return;
              return (
                <Card
                  setOpenCardInfo={setOpenCardInfo}
                  setSelectedCards={setSelectedCards}
                  mission={mission}
                  selectedCards={selectedCards}
                  setOpenSwapModal={setOpenSwapModal}
                  key={mission.id}
                  setSelectedCard={setSelectedCard}
                />
              );
            })
          : null}
      </SortableContext>
    </SortableColumn>
  );
};
export default Column;
