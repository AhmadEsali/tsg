import { ErrorWrapper, TextArea, InputContainer, Label } from './appTextarea.styles';
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Texts } from 'constants/texts';
import Typography from '../Typography/Typography';

interface inputProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  name: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  placeHolder?: string;
  maxChars?: number;
  [x: string]: any;
}

const AppTextarea = ({
  register,
  errors,
  name,
  required = true,
  defaultValue,
  placeHolder,
  maxChars = 1500,
  label,
  ...rest
}: inputProps) => {
  console.log(errors);
  return (
    <InputContainer>
      <Label>
        {Texts[label]}
        {required && <span>*</span>}
      </Label>
      <TextArea
        {...register(name, {
          required: required ? `${Texts[name]} Is ${Texts['required']}` : false,
        })}
        placeholder={placeHolder ? Texts[placeHolder] : ''}
        rows={10}
        defaultValue={defaultValue}
        hasError={Object.keys(errors).length > 0 && errors[name] ? true : false}
        {...rest}
      ></TextArea>

      <Typography variant='h5' color='nn-nn-7' font='secondary-font'>
        {maxChars} {Texts['characters']}
      </Typography>

      {Object.keys(errors).length > 0 && errors[name] ? (
        <ErrorWrapper>
          <ErrorMessage errors={errors} name={name} as='p' />
        </ErrorWrapper>
      ) : null}
    </InputContainer>
  );
};

export default AppTextarea;
