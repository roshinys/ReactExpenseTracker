import React, { useState } from "react";
import "./Expenses.css";
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expenses }) {
  let [filteredYear, setFilteredYear] = useState("2022");
  // let expenseContent = <p>No expense Found</p>;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // if (filteredExpense.length > 0) {
  //   expenseContent = filteredExpense.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
        {/* {expenseContent} */}
        {/* {filteredExpense.length == 0 && <p>No expense Found</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
      </Card>
    </div>
  );
}

export default Expenses;
