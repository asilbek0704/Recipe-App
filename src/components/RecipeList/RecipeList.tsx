import { Button } from '@mui/material';
import { Recipe } from '../Recipe/Recipe';
import './RecipeList.css';
import { useStore } from '../../store/useStore';

export const RecipeList = () => {
  const recipes = useStore(state => state.recipesList);
  const openForm = useStore(state => state.openForm);
  const addRecipe = useStore(state => state.addRecipe);

  return (
    <>
      <ul className='recipe-list'>
        {recipes.map(recipe => (
          <li className='recipe-item' key={recipe.id}>
            <Recipe {...recipe} />
          </li>
        ))}
      </ul>

      <div className='add'>
        <Button color='primary' onClick={
          () => {
            openForm();
            addRecipe({
              id: Math.random().toString(36).substring(2),
              title: "",
              cooktime: 0,
              servings: 0,
              instructions: "",
              ingredients: []
            })
          }
        }>
          Add Recipe
        </Button>
      </div>
    </>
  );
};
