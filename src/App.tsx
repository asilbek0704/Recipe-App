import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts';
import { RecipeList } from './components/RecipeList/RecipeList.tsx';
import { RecipeInputs } from './components/RecipeInputs/RecipeInputs.tsx';
import { useStore } from './store/useStore.ts';

function App() {
  const isFormShown = useStore(state => state.isFormShown);

  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <main>
          <RecipeList />
        </main>

        <aside className={isFormShown ? 'show' : undefined}>
          <RecipeInputs />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
