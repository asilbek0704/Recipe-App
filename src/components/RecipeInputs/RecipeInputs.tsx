import {
  Button,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from '@mui/material';
import { Ingredients } from '../Ingredients/Ingredients';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { useStore } from '../../store/useStore';
import { type TRecipe } from '../../store/types/RecipeSlice.type';
import './RecipeInputs.css';

export const RecipeInputs = () => {
  const closeForm = useStore(state => state.closeForm);
  const updateRecipe = useStore(state => state.updateRecipe);
  const currentRecipe = useStore(state => state.currentRecipe) as TRecipe;

  const { handleSubmit, control } = useForm<TRecipe>({
    values: currentRecipe,
    shouldUnregister: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmit = useDebouncedCallback((data: TRecipe) => {
    updateRecipe(currentRecipe.id, data);
  }, 750);

  return (
    <Paper>
      <div className='close'>
        <button className='button-close' onClick={closeForm}>
          ×
        </button>
      </div>

      <form onChange={handleSubmit(onSubmit)}>
        <fieldset className='main-fields'>
          <label>
            <Typography variant='h2'>Name</Typography>
            <Controller
              control={control}
              name='title'
              render={({ field }) => <Input {...field} />}
            />
          </label>

          <label className='label-minutes'>
            <Typography variant='h2'>Cook Time</Typography>
            <Controller
              control={control}
              name='cookTime'
              render={({ field }) => (
                <Input
                  type='number'
                  endAdornment={
                    <InputAdornment position='end'>mins</InputAdornment>
                  }
                  {...field}
                />
              )}
            />
          </label>

          <label>
            <Typography variant='h2'>Servings</Typography>

            <Controller
              control={control}
              name='servings'
              render={({ field }) => <Input {...field} />}
            />
          </label>

          <label>
            <Typography variant='h2'>Instructions</Typography>

            <Controller
              control={control}
              name='instructions'
              render={({ field }) => <Input {...field} multiline rows={5} />}
            />
          </label>
        </fieldset>

        <fieldset className='ingredients'>
          <legend>
            <Typography variant='h2'>Ingredients</Typography>
          </legend>

          <ul className='ingredients-list'>
            {fields.map((field, index) => (
              <li key={field.id}>
                <Ingredients
                  control={control}
                  names={[`ingredients.${index}.0`, `ingredients.${index}.1`]}
                  onClick={() => {
                    remove(index);
                    handleSubmit(onSubmit)();
                  }}
                />
              </li>
            ))}
          </ul>

          <Button
            type='button'
            onClick={() => {
              append([['', '']]);
              handleSubmit(onSubmit)();
            }}
          >
            Add Recipe
          </Button>
        </fieldset>
      </form>
    </Paper>
  );
};
