import React from "react";

const BurgerStack = ({ newIngredient, removeFromBurger }) => {
  return (
      <ul>
        {newIngredient.map((newIngredient, index) => (
            <li style={{ backgroundColor: newIngredient.color }} key={index}>
             {newIngredient.name} {index}
             <button onClick={() => removeFromBurger(index)}>-</button>
        </li>
        ))}
      </ul>
  );
};

export default BurgerStack;
