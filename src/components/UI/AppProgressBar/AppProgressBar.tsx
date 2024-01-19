import { Texts } from 'constants/texts';
import { Label, Progress, ProgressContainer } from './appProgressBar.styles';

interface progressBarProps {
  max?: number;
  value?: number;
}
const AppProgressBar = ({ max = 100, value = 10 }: progressBarProps) => {
  return (
    <ProgressContainer>
      <Progress max={max} value={value} />
      <Label>
        <span>{value}%</span>
        <span>{Texts['complete']}</span>
      </Label>
    </ProgressContainer>
  );
};

export default AppProgressBar;
