import { ErrorWrapper, Input, InputContainer, Label } from './appInput.styles';
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Texts } from 'constants/texts';

interface inputProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  type?: string;
  name: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  placeHolder?: string;
  fullWidth?: boolean;
  [x: string]: unknown;
}

const AppInput = ({
  register,
  errors,
  type = 'text',
  name,
  required = true,
  defaultValue,
  placeHolder,
  label,
  fullWidth = false,
  ...rest
}: inputProps) => {
  console.log(errors);
  return (
    <InputContainer fullWidth={fullWidth}>
      <Label>{Texts[label]}</Label>
      <Input
        type={type}
        {...register(name, {
          required: required ? `${Texts[name] || Texts[label]} is ${Texts['required']}` : false,
        })}
        placeholder={Texts[placeHolder]}
        defaultValue={defaultValue}
        hasError={Object.keys(errors).length > 0 && errors[name] ? true : false}
        {...rest}
      />

      {Object.keys(errors).length > 0 && errors[name] ? (
        <ErrorWrapper>
          <ErrorMessage errors={errors} name={name} as='p' />
        </ErrorWrapper>
      ) : null}
    </InputContainer>
  );
};

export default AppInput;
