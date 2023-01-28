import Expense from "../../models/Expense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

type ExpensesProp = {
  expenses: Expense[];
};

const Expenses = ({ expenses }: ExpensesProp) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterChangeHandler = (year: string) => {
    setFilteredYear(year);
    setFilteredExpenses(
      expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(year);
      })
    );
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onYearSelect={filterChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;



