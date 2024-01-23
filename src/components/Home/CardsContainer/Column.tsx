import Typography from 'components/UI/Typography';
import { SortableColumn } from './cardsContainer.styles';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const Column = ({ day, setOpenCardInfo, setSelectedCards, selectedCards }) => {
  return (
    <SortableColumn>
      <Typography variant='h2' color='navy-13' weight={700}>
        {day}
      </Typography>

      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={uuidv4()}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={uuidv4()}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={uuidv4()}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={uuidv4()}
        selectedCards={selectedCards}
      />
    </SortableColumn>
  );
};
export default Column;
