import React from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const enteredNumber = inputRef.current.value;
    if (
      enteredNumber.trim().length === 0 ||
      +enteredNumber < 1 ||
      +enteredNumber > 5
    )
      return;
    props.onSubmit(+inputRef.current.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+Add</button>
    </form>
  );
};

export default MealItemForm;
