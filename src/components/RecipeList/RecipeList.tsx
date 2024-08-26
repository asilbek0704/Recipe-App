import { Button } from '@mui/material';
import { Recipe } from '../Recipe/Recipe';
import './RecipeList.css';

const recipes = [1, 2, 3, 4];

export const RecipeList = () => {
  return (
    <>
      <ul className='recipe-list'>
        {recipes.map(item => (
          <li className='recipe-item' key={item}>
            <Recipe />
          </li>
        ))}
      </ul>

      <div className='add'>
        <Button color='primary'>Add Recipe</Button>
      </div>
    </>
  );
};
