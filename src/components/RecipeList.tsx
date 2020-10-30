import React from 'react';
import { MappedTacoRecipe } from '../types';


import RecipeListItem from './RecipeItem';

interface Props {
  data: MappedTacoRecipe[],
  className?: string
}

const RecipeList = ({data}: Props) => {
  return (
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-56 lg:gap-y-20">
      {
        data.map(d => (
          <RecipeListItem recipe={d} key={d.type} />
        ))
      }
      </div>
  );
}

export default RecipeList

