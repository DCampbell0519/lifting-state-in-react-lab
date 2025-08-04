import React from "react";

const IngredientList = ({ ingredient }) => {

    const addToBurger = (newIngredient) => {
        console.log(newIngredient)
    }

  return (
    <ul>
      {ingredient.map((ingredient, index) => (
        <li style={{ backgroundColor: ingredient.color }} key={index}>
          {ingredient.name}
          <button onClick={() => addToBurger({newIngredient})}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
