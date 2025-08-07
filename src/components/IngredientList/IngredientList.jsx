import React from "react";

const IngredientList = ({ ingredient, addToBurger }) => {

   return (
    <ul>
      {ingredient.map((ingredient, index) => (
        <li style={{ backgroundColor: ingredient.color }} key={index}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
