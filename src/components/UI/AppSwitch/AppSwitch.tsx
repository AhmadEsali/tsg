// styles
import {
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Texts } from 'constants/texts';
import { AppSwitchWrapper, Label, Switch } from './appSwitch.styles';

interface AppSwitchProps {
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  name: string;
  label?: string;
  required?: boolean;
  formHook?: boolean;
  control?: any;
  defaultValue?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  disabled?: boolean;
}

const AppSwitch = ({
  register,
  name,
  errors,
  control,
  label,
  formHook = true,
  required = false,
  onChange,
  defaultValue = false,
  value,
  disabled = false,
}: AppSwitchProps) => {
  return (
    <AppSwitchWrapper>
      {label ? <Label>{Texts[label]}</Label> : null}
      <Switch>
        {formHook ? (
          <Controller
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value, name, ref } }) => (
              <input
                type='checkbox'
                checked={value}
                name={name}
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
            rules={{ required: required ? `${Texts[label]} is ${Texts['required']}` : false }}
            name={name}
          />
        ) : (
          <input
            type='checkbox'
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        )}
        <span></span>
      </Switch>
    </AppSwitchWrapper>
  );
};

export default AppSwitch;
