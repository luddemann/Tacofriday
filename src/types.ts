export enum IngredientTypes {
    PROTEIN = 'protein',
    MIXIN = 'mixin',
    TOPPING = 'topping',
    WRAPPING = 'wrapping'
  }

export interface TacoRecipe {
    name: string;
    id: number;
    type: string;
    vegan: boolean;
    desc: string;
    ingredients: string[],
    instructions: string[]
  }
  
  export interface MappedTacoRecipe {
    type: string;
    data: TacoRecipe;
  }