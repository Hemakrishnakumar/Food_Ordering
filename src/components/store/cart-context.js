import React from "react";

const CartContext = React.createContext({
  items: [{ amount: 4 }],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
