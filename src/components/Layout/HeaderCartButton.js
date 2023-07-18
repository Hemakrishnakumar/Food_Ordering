import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import cartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [showBump, setShowBump] = useState(false);
  const cartData = useContext(cartContext);
  const { items } = cartData;
  const cartLength = cartData.items.reduce((a, val) => a + val.amount, 0);
  const btnClasses = `${classes.button} ${showBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setShowBump(true);
    const timer = setTimeout(() => setShowBump(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  function cartHandler(e) {
    e.preventDefault();
    props.onSubmit();
  }
  return (
    <button className={btnClasses} onClick={cartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.name}</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default HeaderCartButton;
