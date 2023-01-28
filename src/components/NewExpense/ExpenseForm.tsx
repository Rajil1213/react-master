import React, { PropsWithChildren, SyntheticEvent, useState } from "react";

import "./ExpenseForm.css";

type FormInput = {
  enteredTitle: string;
  enteredAmount: number;
  enteredDate: string;
};

export type ExpenseData = {
  title: string;
  amount: number;
  date: Date;
};

type expenseFormProps = {
  onSubmitExpenseData: (userInput: ExpenseData) => void;
  onCancel: () => void;
};

const ExpenseForm = ({
  onSubmitExpenseData,
  onCancel,
}: PropsWithChildren<expenseFormProps>) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: 0.0,
    enteredDate: "",
  });

  const titleChangeHandler = (e: SyntheticEvent) => {
    setUserInput((prevState: FormInput) => {
      return {
        ...prevState,
        enteredTitle: (e.target as HTMLInputElement).value,
      };
    });
  };

  const amountChangeHandler = (e: SyntheticEvent) => {
    setUserInput((prevState: FormInput) => {
      return {
        ...prevState,
        enteredAmount: parseInt((e.target as HTMLInputElement).value),
      };
    });
  };

  const dateChangeHandler = (e: SyntheticEvent) => {
    setUserInput((prevState: FormInput) => {
      return {
        ...prevState,
        enteredDate: (e.target as HTMLInputElement).value,
      };
    });
  };
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault(); // do not send request to server

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    onSubmitExpenseData(expenseData);
    setUserInput({
      enteredAmount: 0,
      enteredTitle: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="submit"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};


export default ExpenseForm;