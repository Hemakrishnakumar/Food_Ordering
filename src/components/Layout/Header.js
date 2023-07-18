import { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Your Food</h1>
        <HeaderCartButton name="Cart" onSubmit={props.onSubmit} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
