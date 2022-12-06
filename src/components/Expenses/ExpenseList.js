import React from "react";
import ExpenseItem from "./ExpenseItem.js";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
}

export default ExpenseList;
