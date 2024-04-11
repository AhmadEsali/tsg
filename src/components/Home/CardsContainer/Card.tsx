// import { useState } from 'react';
import { PasswordShow, Swap } from 'components/icons';
import {
  CardActions,
  CardHover,
  ColumnCard,
  HoverDescription,
  HoverTitle,
  HoverValues,
  ShowInfo,
  SwapCard,
  TitleTag,
  ValueItem,
} from './cardsContainer.styles';

import Typography from 'components/UI/Typography';
import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';

const Card = ({
  setOpenCardInfo,
  mission,
  setSelectedCards,
  selectedCards,
  setOpenSwapModal,
  setSelectedCard,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: mission.id,
  });

  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: `draggable-${mission.id}`,
  // });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const handleSwapClick = (e) => {
    e.stopPropagation();
    setSelectedCard(mission);
    setOpenSwapModal(true);
  };

  const handleShowInfo = (e) => {
    e.stopPropagation();
    console.log('show info');
    setShowInfo((prev) => !prev);
    console.log('show info');
  };
  const handleDoubleClick = () => {
    console.log('double click');
    setOpenCardInfo(true);
    setSelectedCard(mission);
  };

  const handleClick = () => {
    console.log('click');
    if (selectedCards.includes(mission.id)) {
      setSelectedCards((prev) => prev.filter((card) => card !== mission.id));
      return;
    }
    setSelectedCards((prev) => [...prev, mission.id]);
  };
  return (
    <ColumnCard
      ref={setNodeRef}
      style={style}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      selected={selectedCards.includes(mission.id)}
      {...listeners}
      {...attributes}
    >
      <CardActions>
        <ShowInfo onClick={(e) => handleShowInfo(e)}>
          <PasswordShow />
        </ShowInfo>

        <SwapCard onClick={(e) => handleSwapClick(e)}>
          <Swap />
        </SwapCard>
      </CardActions>
      <Typography variant='h6' color='navy-7'>
        13:30 Jan 20, 2024
      </Typography>
      <Typography variant='h5' color='navy-11' weight={700}>
        CompanySite.com, 12345
      </Typography>
      <Typography variant='h6' color='navy-11'>
        {mission.company}
      </Typography>
      <Typography variant='h6' color='navy-11'>
        {mission.customer_number}
      </Typography>
      <Typography variant='h6' color='navy-9'>
        {mission.vehicle}, {mission.weight}
      </Typography>

      {showInfo ? (
        <CardHover>
          <Typography variant='h6' color='navy-4'>
            Jan 20, 2024
          </Typography>
          <HoverTitle>
            <Typography variant='h5' color='navy-1' weight={700}>
              BG-123154-FSJA
            </Typography>
            <TitleTag>123456</TitleTag>
          </HoverTitle>

          <HoverValues>
            <ValueItem>
              <Typography variant='h6' color='navy-5'>
                Kudennummer
              </Typography>
              <Typography variant='h6' color='navy-1'>
                +49 30 12345678
              </Typography>
            </ValueItem>
            <ValueItem>
              <Typography variant='h6' color='navy-5'>
                Info Trebbin
              </Typography>
              <Typography variant='h6' color='navy-1'>
                Yes
              </Typography>
            </ValueItem>
            <ValueItem>
              <Typography variant='h6' color='navy-5'>
                Ansprechpartner
              </Typography>
              <Typography variant='h6' color='navy-1'>
                +49 30 12345678
              </Typography>
            </ValueItem>
            <ValueItem>
              <Typography variant='h6' color='navy-5'>
                Bundgewicht
              </Typography>
              <Typography variant='h6' color='navy-1'>
                3 Tons
              </Typography>
            </ValueItem>
            <ValueItem>
              <Typography variant='h6' color='navy-5'>
                Bestelldatum
              </Typography>
              <Typography variant='h6' color='navy-1'>
                Jan 20, 2024
              </Typography>
            </ValueItem>
            <HoverDescription>
              <Typography variant='h6' color='navy-5'>
                Bemerkung
              </Typography>
              <Typography variant='h6' color='navy-1'>
                Lorem ipsum dolor sit amet consectetur. Sapien pellentesque quis diam vitae.
              </Typography>
            </HoverDescription>
          </HoverValues>
        </CardHover>
      ) : null}
    </ColumnCard>
  );
};
export default Card;
