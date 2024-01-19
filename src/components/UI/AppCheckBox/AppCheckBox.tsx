// styles
import { CheckBoxContainer } from './appCheckBox.styles';
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { Texts } from 'constants/texts';

interface CheckBoxProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  name: string;
  required?: boolean;
}

const AppCheckBox = ({ register, name, required = false, errors }: CheckBoxProps) => {
  return (
    <CheckBoxContainer>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {/* <span></span> */}
      <input
        type='checkbox'
        id='myCheckbox'
        {...register(name, {
          required: required ? `${Texts[name]} Is ${Texts['required']}` : false,
        })}
      />
    </CheckBoxContainer>
  );
};

export default AppCheckBox;
