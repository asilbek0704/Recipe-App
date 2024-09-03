import { Button } from '@mui/material';
import { Ingredients } from '../Ingredient/Ingredient';
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';

interface IIngredientsList {
  onSubmit: SubmitHandler<FieldValues>;
}

export const IngredientsList = ({ onSubmit }: IIngredientsList) => {
  const { control, handleSubmit } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const handleAddClick = () => {
    append([{ name: '', amount: '' }]);
    handleSubmit(onSubmit)();
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <ul className='ingredients-list'>
        {fields.map((field, index) => {
          return (
            <li key={field.id}>
              <Ingredients
                names={{
                  name: `ingredients.${index}.name`,
                  amount: `ingredients.${index}.amount`,
                }}
                onClick={() => handleRemoveClick(index)}
              />
            </li>
          );
        })}
      </ul>

      <Button type='button' onClick={handleAddClick}>
        + Ingredient
      </Button>
    </>
  );
};
