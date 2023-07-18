import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useContext(CartContext);

  function addItemHandler(item) {
    cartData.addItem({ ...item, amount: 1 });
  }
  function removeItemHandler(item) {
    cartData.removeItem(item.id);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Ordering...!");
    setTimeout(() => window.alert("Ordered Successfully ☺️"), 2000);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartData.items.map((item, i) => (
        <CartItem
          key={i}
          item={item}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hasItems = cartData.items.length > 0;
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartData.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button onClick={submitHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
