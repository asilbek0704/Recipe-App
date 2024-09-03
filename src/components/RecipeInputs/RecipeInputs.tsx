import { Paper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { useStore } from '../../store/useStore';
import { type TRecipe } from '../../store/types/RecipeSlice.type';
import { CloseButton } from '../CloseButton/CloseButton';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputSimple } from '../InputSimple/InputSimple';
import './RecipeInputs.css';
import { IngredientsList } from '../IngredientsList/IngredientsList';

export const RecipeInputs = () => {
  const closeForm = useStore(state => state.closeForm);
  const updateRecipe = useStore(state => state.updateRecipe);
  const currentRecipe = useStore(state => state.currentRecipe);

  const { handleSubmit, control } = useForm<TRecipe>({
    values: currentRecipe,
  });

  const onSubmit = useDebouncedCallback((data: TRecipe) => {
    updateRecipe(currentRecipe.id, data);
  }, 750);

  return (
    <Paper>
      <div className='close'>
        <CloseButton className='button-close' onClick={closeForm}>
          ×
        </CloseButton>
      </div>

      <FormProvider control={control} handleSubmit={handleSubmit}>
        <form onChange={handleSubmit(onSubmit)}>
          <fieldset className='main-fields'>
            <InputLabel title='Name'>
              <InputSimple name='title' type='text' />
            </InputLabel>

            <InputLabel title='Cook Time' className='label-minutes'>
              <InputSimple
                name='cookTime'
                type='number'
                adornmentPosition='end'
                adornmentText='mins'
              />
            </InputLabel>

            <InputLabel title='Servings'>
              <InputSimple name='servings' type='number' />
            </InputLabel>

            <InputLabel title='Instructions'>
              <InputSimple name='instructions' type='text' rows={5} />
            </InputLabel>
          </fieldset>

          <fieldset className='ingredients'>
            <legend>
              <Typography variant='h2'>Ingredients</Typography>
            </legend>

            <IngredientsList onSubmit={onSubmit} />
          </fieldset>
        </form>
      </FormProvider>
    </Paper>
  );
};
