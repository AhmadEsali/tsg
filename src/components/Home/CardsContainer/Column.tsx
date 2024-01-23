import Typography from 'components/UI/Typography';
import { SortableColumn } from './cardsContainer.styles';
import Card from './Card';
const Column = ({ day, setOpenCardInfo, setSelectedCards, selectedCards, index }) => {
  return (
    <SortableColumn>
      <Typography variant='h2' color='navy-13' weight={700}>
        {day}
      </Typography>

      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={day + index + 1}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={day + index + 2}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={day + index + 3}
        selectedCards={selectedCards}
      />
      <Card
        setOpenCardInfo={setOpenCardInfo}
        setSelectedCards={setSelectedCards}
        id={day + index + 4}
        selectedCards={selectedCards}
      />
    </SortableColumn>
  );
};
export default Column;
