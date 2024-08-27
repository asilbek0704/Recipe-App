import { Button, Paper, Typography } from '@mui/material';
import type Recipe from '../../store/types/Recipe.type';
import './Recipe.css';
import { useStore } from '../../store/useStore';

export const Recipe = ({
  id,
  title,
  cooktime,
  servings = 1,
  instructions,
  ingredients,
}: Recipe) => {
  const removeRecipe = useStore(state => state.removeRecipe);

  return (
    <Paper className='recipe'>
      <div className='recipe-top'>
        <Typography variant='h1'>{title}</Typography>

        <div className='buttons'>
          <Button color='primary' sx={{ marginRight: 0.5 }}>
            edit
          </Button>
          <Button color='error' onClick={() => removeRecipe(id)}>
            delete
          </Button>
        </div>
      </div>

      <div className='recipe-table'>
        <div className='recipe-row'>
          <Typography variant='h3'>Cooktime:</Typography>
          <span>
            <Typography variant='caption'>{cooktime}</Typography>
          </span>
        </div>

        <div className='recipe-row'>
          <Typography variant='h3'>Servings:</Typography>
          <span>
            <Typography variant='caption'>{servings}</Typography>
          </span>
        </div>

        <div className='recipe-row extended'>
          <Typography variant='h3'>Instructions:</Typography>
          <span>
            <Typography variant='caption'>{instructions}</Typography>
          </span>
        </div>

        <div className='recipe-row extended'>
          <Typography variant='h3'>Ingredients:</Typography>

          <ul className='ingredients-list'>
            {ingredients.map(ingredient => (
              <li key={ingredient[0]}>
                <Typography variant='body1'>{ingredient[0]}</Typography>
                <Typography variant='body1'>{ingredient[1]}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Paper>
  );
};

{
  /* <Button color='primary'>Edit</Button>
      <Button color='error'>delete</Button>
      <Button color='primary'>Add recipe</Button>

      <Typography variant='h1'>Plain chicken</Typography>
      <Typography variant='h2'>Ingredients</Typography>
      <Typography variant='h3'>Cooktime: </Typography>
      <Typography variant='caption'>1:45</Typography>
      <Typography variant='body1'>Meat 2 Pounds</Typography> */
}
