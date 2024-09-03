import { Ingredients } from "../Ingredient/Ingredient";

export const IngredientsList = () => (
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
);
