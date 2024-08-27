import { Input, Typography } from "@mui/material";

export const Ingredients = () => (
  <>
    <label>
      <Typography variant='h3'>Name</Typography>
      <Input
        type='text'
        required
        name='ingredient'
        placeholder='sugar, flour, etc.'
      />
    </label>

    <label>
      <Typography variant='h3'>Amount</Typography>
      <Input
        type='text'
        required
        name='ingredient'
        placeholder='piece, tablespoon, cup, etc.'
      />
    </label>

    <button className='button-remove'>×</button>
  </>
);
