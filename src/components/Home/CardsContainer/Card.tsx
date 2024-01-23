// import { useState } from 'react';
import {
  CardHover,
  ColumnCard,
  HoverDescription,
  HoverTitle,
  HoverValues,
  TitleTag,
  ValueItem,
} from './cardsContainer.styles';
import Typography from 'components/UI/Typography';

const Card = ({ setOpenCardInfo, id, setSelectedCards, selectedCards }) => {
  //   console.log('🚀 ~ Card ~ id:', id);
  //   const [selectedCard, setSelectedCard] = useState(false);
  const handleDoubleClick = () => {
    console.log('double click');
    setOpenCardInfo(true);
  };

  const handleClick = () => {
    console.log('click');
    console.log(id);
    if (selectedCards.includes(id)) {
      setSelectedCards((prev) => prev.filter((card) => card !== id));
      return;
    }
    setSelectedCards((prev) => [...prev, id]);
  };
  return (
    <ColumnCard
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      selected={selectedCards.includes(id)}
      key={id}
    >
      <Typography variant='h6' color='navy-7'>
        13:30 Jan 20, 2024
      </Typography>
      <Typography variant='h5' color='navy-11' weight={700}>
        CompanySite.com, 12345
      </Typography>
      <Typography variant='h6' color='navy-11'>
        Company’s Name
      </Typography>
      <Typography variant='h6' color='navy-11'>
        +49 30 12345678{' '}
      </Typography>
      <Typography variant='h6' color='navy-9'>
        Car 12345, 3 Tons
      </Typography>

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
    </ColumnCard>
  );
};
export default Card;
