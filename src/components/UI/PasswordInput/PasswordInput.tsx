import { ErrorWrapper, Input, InputContainer, Label } from './passwordinput.styles';
import { useRef, useState } from 'react';
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Texts } from 'constants/texts';

interface passwordProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  label?: string;
  required?: boolean;
  placeHolder?: string;
}
const PasswordInput = ({
  register,
  errors,
  label = 'password',
  placeHolder,
  required = false,
}: passwordProps) => {
  const [inputType, setInputType] = useState('password');

  const handlePasswordView = (e) => {
    e.preventDefault();
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  return (
    <InputContainer>
      <Label>
        {Texts[label]}
        {required && <span>*</span>}
      </Label>
      <Input
        type={inputType}
        placeholder={placeHolder}
        {...register('password', {
          required: 'Password is required',
        })}
        hasError={Object.keys(errors).length > 0 && errors['password'] ? true : false}
      />
      <button onClick={handlePasswordView}>{inputType === 'text' ? 'show' : 'hide'}</button>
      {Object.keys(errors).length > 0 && errors['password'] ? (
        <ErrorWrapper>
          <ErrorMessage errors={errors} name='password' as='p' />
        </ErrorWrapper>
      ) : null}{' '}
    </InputContainer>
  );
};

export default PasswordInput;
