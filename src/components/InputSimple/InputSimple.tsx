import { Input, InputAdornment } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { TRecipe } from '../../store/types/RecipeSlice.type';

interface IInputSimpleProps {
  name: string;
  control: Control<TRecipe>;
  type: 'number' | 'text';
  adornmentPosition?: 'end' | 'start' | null;
  adornmentText?: string;
}

export const InputSimple = ({
  name,
  control,
  type = 'text',
  adornmentPosition = null,
  adornmentText = '',
}: IInputSimpleProps) => {
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
        />
      )}
    />
  );
};
