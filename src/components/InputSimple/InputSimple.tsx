import { Input, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface IInputSimpleProps {
  name: string;
  type?: 'number' | 'text';
  adornmentPosition?: 'end' | 'start' | null;
  adornmentText?: string;
  rows?: number;
}

export const InputSimple = ({
  name,
  type = 'text',
  adornmentPosition = null,
  adornmentText = '',
  rows,
}: IInputSimpleProps) => {
  const { control } = useFormContext();

  let adornment = null;

  if (adornmentPosition && adornmentText) {
    adornment = (
      <InputAdornment position={adornmentPosition}>
        {adornmentText}
      </InputAdornment>
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          endAdornment={adornmentPosition == 'end' ? adornment : null}
          startAdornment={adornmentPosition == 'start' ? adornment : null}
          autoComplete='off'
          multiline={rows ? true : false}
          rows={rows ?? undefined}
        />
      )}
    />
  );
};
