import { Button, Paper, Typography } from '@mui/material';
import './Recipe.css';

export const Recipe = () => {
  const ingredients = [
    ['Chicken', '2 Pounds'],
    ['Salt', '1 Tbs'],
  ];

  return (
    <Paper className='recipe'>
      <div className='recipe-top'>
        <Typography variant='h1'>Plain chicken</Typography>

        <div className='buttons'>
          <Button color='primary' sx={{ marginRight: 0.5 }}>
            edit
          </Button>
          <Button color='error'>delete</Button>
        </div>
      </div>

      <div className='recipe-table'>
        <div className='recipe-row'>
          <Typography variant='h3'>Cooktime:</Typography>
          <span>
            <Typography variant='caption'>1:45</Typography>
          </span>
        </div>

        <div className='recipe-row'>
          <Typography variant='h3'>Servings:</Typography>
          <span>
            <Typography variant='caption'>30</Typography>
          </span>
        </div>

        <div className='recipe-row extended'>
          <Typography variant='h3'>Instructions:</Typography>
          <span>
            <Typography variant='caption'>
              1. Put salt on chicken 2. Put chicken in oven 3. Eat chicken
            </Typography>
          </span>
        </div>

        <div className='recipe-row extended'>
          <Typography variant='h3'>Ingredients:</Typography>

          <ul className='ingredients-list'>
            {ingredients.map(item => (
              <li key={item[0]}>
                <Typography variant='body1'>{item[0]}</Typography>
                <Typography variant='body1'>{item[1]}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <Button color='primary'>Edit</Button>
      <Button color='error'>delete</Button>
      <Button color='primary'>Add recipe</Button>

      <Typography variant='h1'>Plain chicken</Typography>
      <Typography variant='h2'>Ingredients</Typography>
      <Typography variant='h3'>Cooktime: </Typography>
      <Typography variant='caption'>1:45</Typography>
      <Typography variant='body1'>Meat 2 Pounds</Typography> */}
    </Paper>
  );
};
