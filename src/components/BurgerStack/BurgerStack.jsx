import React from "react";

const BurgerStack = ({ newIngredient }) => {
  return (
      <ul>
        {newIngredient.map((newIngredient, index) => (
            <li style={{ backgroundColor: newIngredient.color }} key={index}>
             {newIngredient.name}
        </li>
        ))}
      </ul>
  );
};

export default BurgerStack;
