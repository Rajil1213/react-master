import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Expense from "./models/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { default as dummyExpenses } from "./data/Expenses";

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenses = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

