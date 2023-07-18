import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const cartData = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const submitHandler = (amount) => {
    const item = { ...props, amount: amount };
    cartData.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onSubmit={submitHandler} />
    </li>
  );
};

export default MealItem;
