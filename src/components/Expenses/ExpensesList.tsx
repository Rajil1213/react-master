import React from "react";
import Expense from "../../models/Expense";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  items: Expense[];
};

const ExpensesList = ({ items }: ExpensesListProps) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;


