import React, { PropsWithChildren, useState } from "react";
import ExpenseForm, { ExpenseData } from "./ExpenseForm";
import Expense from "../../models/Expense";

import "./NewExpense.css";

type newExpenseProps = {
  onAddExpense: (expense: Expense) => void;
};
const NewExpense = ({ onAddExpense }: PropsWithChildren<newExpenseProps>) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const submitExpenseDataHandler = (userInput: ExpenseData) => {
    const expenseData = {
      ...userInput,
      id: (Math.random() * 1000).toFixed(0),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;

