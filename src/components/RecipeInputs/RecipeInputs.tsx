import { Button, Paper, Typography } from '@mui/material';
import { Ingredients } from '../Ingredient/Ingredient';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { useStore } from '../../store/useStore';
import { type TRecipe } from '../../store/types/RecipeSlice.type';
import { CloseButton } from '../CloseButton/CloseButton';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputSimple } from '../InputSimple/InputSimple';
import './RecipeInputs.css';

export const RecipeInputs = () => {
  const closeForm = useStore(state => state.closeForm);
  const updateRecipe = useStore(state => state.updateRecipe);
  const currentRecipe = useStore(state => state.currentRecipe);

  const { handleSubmit, control } = useForm<TRecipe>({
    values: currentRecipe,
    shouldUnregister: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmit = useDebouncedCallback((data: TRecipe) => {
    console.log(data);
    updateRecipe(currentRecipe.id, data);
  }, 750);

  return (
    <Paper>
      <div className='close'>
        <CloseButton className='button-close' onClick={closeForm}>
          ×
        </CloseButton>
      </div>

      <form onChange={handleSubmit(onSubmit)}>
        <fieldset className='main-fields'>
          <InputLabel title='Name'>
            <InputSimple name='title' control={control} type='text' />
          </InputLabel>

          <InputLabel title='Cook Time'>
            <InputSimple
              name='cookTime'
              control={control}
              type='text'
              adornmentPosition='end'
              adornmentText='mins'
            />
          </InputLabel>

          <InputLabel title='Servings'>
            <InputSimple name='servings' control={control} type='number' />
          </InputLabel>

          <InputLabel title='Instructions'>
            <InputSimple name='instructions' control={control} type='text' />
          </InputLabel>
        </fieldset>

        <fieldset className='ingredients'>
          <legend>
            <Typography variant='h2'>Ingredients</Typography>
          </legend>

          <ul className='ingredients-list'>
            {/* {console.log(fields)} */}
            {fields.map((field, index) => {
              // console.log(index, field);
              return (
                <li key={field.id}>
                  <Ingredients
                    control={control}
                    names={{
                      name: `ingredients.${index}.name`,
                      amount: `ingredients.${index}.amount`,
                    }}
                    onClick={() => {
                      remove(index);
                      handleSubmit(onSubmit)();
                    }}
                  />
                </li>
              );
            })}
          </ul>

          <Button
            type='button'
            onClick={() => {
              append([{ name: '', amount: '' }]);
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
