import Typography from 'components/UI/Typography';
import { SortableColumn } from './cardsContainer.styles';
import Card from './Card';
const Column = ({ day }) => {
  return (
    <SortableColumn>
      <Typography variant='h2' color='navy-13' weight={700}>
        {day}
      </Typography>

      <Card />
      <Card />
      <Card />
      <Card />
    </SortableColumn>
  );
};
export default Column;
