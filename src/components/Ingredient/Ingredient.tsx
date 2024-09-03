import { Input, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const Ingredients = ({
  onClick,
  names,
}: {
  onClick: () => void;
  names: {
    name: `ingredients.${number}.name`;
    amount: `ingredients.${number}.amount`;
  };
}) => {
  const { control } = useFormContext();
  return (
    <>
      <label>
        <Typography variant='h3'>Name</Typography>

        <Controller
          control={control}
          name={names.name}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <label>
        <Typography variant='h3'>Amount</Typography>
        <Controller
          control={control}
          name={names.amount}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <button className='button-remove' onClick={onClick}>
        ×
      </button>
    </>
  );
};
