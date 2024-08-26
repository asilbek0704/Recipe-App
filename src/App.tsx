import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts';
import { RecipeList } from './components/RecipeList/RecipeList.tsx';
import { RecipeInputs } from './components/RecipeInputs/RecipeInputs.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <main>
          <RecipeList />
        </main>
        
        <aside>
          <RecipeInputs />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
