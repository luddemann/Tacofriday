import React, { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import RecipeHeader from './RecipeHeader'
import RecipeList from './RecipeList'

import { TacoRecipe, MappedTacoRecipe } from '../types'
import { shuffleRecipes } from '../utils/utils'
import tacorecipes from '../tacorecipes.json'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<MappedTacoRecipe[]>();

  const fetchData = async () => {
    setIsLoading(true);
    const randomUniqueRecipes: MappedTacoRecipe[] = shuffleRecipes(
      tacorecipes.slice()
    ).reduce((uniqueRecipes: MappedTacoRecipe[], currRecipe: TacoRecipe) => {
      if (
        !uniqueRecipes
          .map((recipe) => recipe.data.type)
          .includes(currRecipe.type)
      ) {
        return [
          ...uniqueRecipes,
          {
            type: currRecipe.type,
            data: { ...currRecipe },
          },
        ];
      } else {
        return uniqueRecipes;
      }
    }, [] as MappedTacoRecipe[]);

    await setTimeout(() => {
      setData(randomUniqueRecipes);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white relative'>
      {/* <svg
        className='absolute top-0 z-0 fill-current text-blue-800 '
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        data-aos='zoom-out-down'
        data-aos-duration='750'
        data-aos-delay='500'
      >
        <path fill='#5B81B1' d='M0 64l1440 256V0H0z' />
      </svg> */}
      <div className='container px-6 mx-auto max-w-screen-container relative z-10'>
        <header className="">
          <Header />
        </header>
        <section>
          <Hero isLoading={isLoading} onClick={fetchData} />
        </section>
      </div>
      <div className="bg-orange-200">
        <div className="container px-6 mx-auto max-w-screen-container relative z-10">
          { data && <RecipeHeader data={data} /> }
        </div>
      </div>
      <div className="container px-6 mx-auto max-w-screen-container relative z-10">
        <div className="mb-20">
          { data && <RecipeList data={data} /> }
        </div>
      </div>
      
    </div>
  )
}

export default App
