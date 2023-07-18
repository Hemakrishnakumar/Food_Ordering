import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedCart;
    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.value.amount,
      };
      updatedCart = [...state.items];
      updatedCart[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCart = state.items.concat(action.value);
    }
    return {
      items: updatedCart,
      totalAmount: state.totalAmount + action.value.price * action.value.amount,
    };
  } else if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.value);
    const curCartItem = state.items[itemIndex];
    let updatedCart;
    if (curCartItem.amount === 1) {
      updatedCart = [...state.items];
      updatedCart.splice(itemIndex, 1);
    } else {
      const updatedCartItem = {
        ...curCartItem,
        amount: curCartItem.amount - 1,
      };
      updatedCart = [...state.items];
      updatedCart[itemIndex] = updatedCartItem;
    }
    return {
      items: updatedCart,
      totalAmount: state.totalAmount - curCartItem.price,
    };
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemHandler(item) {
    dispatchCartState({ type: "ADD", value: item });
  }
  function removeItemHandler(id) {
    dispatchCartState({ type: "REMOVE", value: id });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
