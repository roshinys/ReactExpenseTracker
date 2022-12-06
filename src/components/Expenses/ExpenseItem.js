import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../../UI/Card";

function ExpenseItem(props) {
  let { title, amount, date } = props;
  // let [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{amount}</div>
      {/* <button onClick={clickHandler}>change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
