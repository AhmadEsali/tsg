// styles
import { Texts } from 'constants/texts';
import { AppSelectWrapper, ErrorWrapper, Label } from './appSelect.styles';

// libs
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const colorOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
];

interface selectProps {
  label?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  defaultValue?: any;
  control?: any;
  name?: string;
  errors?: any;
  placeholder?: string;
}

const AppSelect = ({
  label,
  required = false,
  name,
  options = colorOptions,
  defaultValue,
  control,
  errors,
  placeholder,
}: selectProps) => {
  return (
    <AppSelectWrapper>
      {label ? (
        <Label>
          {Texts[label]}
          {required ? <span>*</span> : null}
        </Label>
      ) : null}
      <Controller
        control={control}
        defaultValue={defaultValue || null}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            ref={ref}
            value={options.find((c) => c.value === value)}
            name={name}
            options={options}
            isClearable
            placeholder={placeholder}
            className='app-select-basic'
            classNamePrefix='app-select'
            onChange={(selectedOption) => {
              onChange(selectedOption?.value);
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                boxShadow:
                  state.isFocused || state.hasValue ? '0 0 0 0.6px rgb(var(--purple))' : 'none',
              }),
            }}
          />
        )}
        rules={{ required: required ? `${Texts[label]} is ${Texts['required']}` : false }}
        name={name}
      />

      {errors && errors[name] ? (
        <ErrorWrapper>
          <p>{errors[name]['message']}</p>
        </ErrorWrapper>
      ) : null}
    </AppSelectWrapper>
  );
};

export default AppSelect;
