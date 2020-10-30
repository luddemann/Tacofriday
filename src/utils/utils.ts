import { TacoRecipe } from '../types'

export const shuffleRecipes = (tacorecipes: TacoRecipe[]) => {
  for (let i = tacorecipes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = tacorecipes[i];
    tacorecipes[i] = tacorecipes[j];
    tacorecipes[j] = temp;
  }
  return tacorecipes;
};