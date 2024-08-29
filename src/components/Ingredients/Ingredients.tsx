import { Input, Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { type TRecipe} from '../../store/types/RecipeSlice.type';

export const Ingredients = ({
  onClick,
  names,
  control,
}: {
  onClick: () => void;
  control: Control<TRecipe>;
  names: [string, string]
}) => {
  return (
    <>
      <label>
        <Typography variant='h3'>Name</Typography>

        <Controller
          control={control}
          name={names[0]}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <label>
        <Typography variant='h3'>Amount</Typography>
        <Controller
          control={control}
          name={names[1]}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <button className='button-remove' onClick={onClick}>
        ×
      </button>
    </>
  );
};
