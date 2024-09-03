import { Button } from '@mui/material';
import { Recipe } from '../Recipe/Recipe';
import './RecipeList.css';
import { useStore } from '../../store/useStore';

export const RecipeList = () => {
  const recipesList = useStore(state => state.recipesList);
  const openForm = useStore(state => state.openForm);
  const createRecipe = useStore(state => state.createRecipe);
  const fetchRecipe = useStore(state => state.fetchRecipe);

  return (
    <>
      <ul className='recipe-list'>
        {recipesList?.map(recipe => (
          <li className='recipe-item' key={recipe.id}>
            <Recipe {...recipe} />
          </li>
        ))}
      </ul>

      <div className='add'>
        <Button
          color='primary'
          onClick={() => {
            createRecipe();
            fetchRecipe();
            openForm();
          }}
        >
          Add Recipe
        </Button>
      </div>
    </>
  );
};
