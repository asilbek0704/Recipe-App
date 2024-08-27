import {
  Button,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from '@mui/material';
import './RecipeInputs.css';
import { useStore } from '../../store/useStore';
import { Ingredients } from '../Ingredients/Ingredients';

export const RecipeInputs = () => {
  const closeForm = useStore(state => state.closeForm);

  return (
    <Paper>
      <div className='close'>
        <button className='button-close' onClick={closeForm}>
          ×
        </button>
      </div>

      <form>
        <fieldset className='main-fields'>
          <label>
            <Typography variant='h2'>Name</Typography>
            <Input type='text' required name='name' placeholder='Apple Pie' />
          </label>

          <label className='label-minutes'>
            <Typography variant='h2'>Cook Time</Typography>
            <Input
              type='number'
              required
              name='cookTime'
              placeholder='10'
              endAdornment={
                <InputAdornment position='end'>mins</InputAdornment>
              }
            />
          </label>

          <label>
            <Typography variant='h2'>Servings</Typography>
            <Input type='number' required name='servings' placeholder='1' />
          </label>

          <label>
            <Typography variant='h2'>Instructions</Typography>
            <Input
              multiline
              required
              name='instructions'
              placeholder='Step 1: ...'
              rows={5}
            />
          </label>
        </fieldset>

        <fieldset className='ingredients'>
          <legend>
            <Typography variant='h2'>Ingredients</Typography>
          </legend>

          <ul className='ingredients-list'>
            <li>
              <Ingredients />
            </li>
          </ul>

          <Button color='primary'>Add Ingredient</Button>
        </fieldset>
      </form>
    </Paper>
  );
};
