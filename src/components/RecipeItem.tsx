import React from 'react';
import { MappedTacoRecipe } from '../types';
import Text from './common/Text'

interface Props {
  recipe: MappedTacoRecipe,
  className?: string
}

const RecipeItem = ({recipe}: Props) => {
  const { desc, name, type, ingredients, instructions } = recipe.data;

  const renderedIngredients = ingredients.map((i) => {
    return (
      <ul className="list-disc list-inside">
        <li className="my-2"> {i} </li>
      </ul>
    )
  })

  const renderedInstructions = instructions.map((i) => {
    return (
      <ol className="list-none">
        <li className="my-3">
            {instructions.indexOf(i) + 1 + ". "} {i}
        </li>
      </ol>
    )
  })

  return (
    <section className="mb-20 lg:mb-0">
      <div className="">
        <div className="mb-5 text-orange-500 uppercase tracking-widest flex items-center">
           <span className="h-px w-8 bg-orange-500 mr-4" /> 
           <p>{type}</p>
        </div>
        <div className="mb-6">
            <Text as="h3" text={name} className="text-2xl font-bold text-gray-800 leading-snug mb-2" />
            <Text as="p" text={desc} className="text-gray-700 text-base" />
        </div>
      </div>

      <div className="">
        <div className="">
            <Text as="h4" text="Ingredients" className="text-gray-800 font-semibold italic text-lg" />
            <div className="text-gray-700 my-6"> {renderedIngredients} </div>
        </div>
        <div className="">
          <Text as="h4" text="Instructions" className="text-gray-800 font-semibold italic text-lg" />
          <div className="text-gray-700 my-5"> {renderedInstructions}  </div> 
        </div>
      </div>
    </section>
  );
}

export default RecipeItem

/* {`${renderedIngredients}`} */