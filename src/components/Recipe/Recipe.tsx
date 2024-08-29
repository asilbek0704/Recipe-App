import { Button, Paper, Typography } from '@mui/material';
import { type TRecipe } from '../../store/types/RecipeSlice.type';
import './Recipe.css';
import { useStore } from '../../store/useStore';

export const Recipe = ({
  id,
  title,
  cookTime,
  servings = 1,
  instructions,
  ingredients,
}: TRecipe) => {
  const fetchRecipe = useStore(state => state.fetchRecipe);
  const removeRecipe = useStore(state => state.removeRecipe);
  const openForm = useStore(state => state.openForm);
  const closeForm = useStore(state => state.closeForm);

  return (
    <Paper className='recipe'>
      <div className='recipe-top'>
        <Typography variant='h1'>{title}</Typography>

        <div className='buttons'>
          <Button
            color='primary'
            sx={{ marginRight: 0.5 }}
            onClick={() => {
              closeForm();
              fetchRecipe(id);
              openForm();
            }}
          >
            edit
          </Button>
          <Button
            color='error'
            onClick={() => {
              removeRecipe(id);
              fetchRecipe();
              closeForm();
            }}
          >
            delete
          </Button>
        </div>
      </div>

      <div className='recipe-table'>
        <div className='recipe-row'>
          <Typography variant='h3'>Cooktime:</Typography>
          <span>
            <Typography variant='caption'>{cookTime}</Typography>
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
            {ingredients?.map((ingredient) => (
              <li key={id + ingredient[0]}>
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
