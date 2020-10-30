import React from "react";
import {
  MappedTacoRecipe,
  IngredientTypes
} from "../types";
import Text from "./common/Text";
import CookingHat from '../assets/images/cookinghat.svg'


interface Props {
  data: MappedTacoRecipe[];
  className?: string;
}

const RecipeHeader = ({ data }: Props) => {
  const getNameForType = (type: IngredientTypes) =>
    data.find(d => d.type === type)?.data.name;

  return (
    <div className="flex-column lg:flex mx-auto lg:mx-0 text-center lg:text-left items-center py-16 mb-20">
      <div>
          <Text as="h3" text="Tonight's tacos!" className="pb-5 font-extrabold text-3xl text-gray-800" />
          <Text 
            as="p"
            text={`
                ${getNameForType(IngredientTypes.PROTEIN)}
                <b>with</b> ${getNameForType(
                IngredientTypes.MIXIN
                )} <b>garnished with</b> ${getNameForType(
                IngredientTypes.TOPPING
                )} <b>and wrapped in delicious</b>
                ${getNameForType(IngredientTypes.WRAPPING)}
            `}
            className="font-semibold text-gray-800 text-2xl lg:w-9/12"
          />
      </div>
      <img className="w-64 h-64 mx-auto mt-8 lg:m-0" src={CookingHat} alt="Taco's on a wooden board" />
    </div>
  );
};



export default RecipeHeader;
