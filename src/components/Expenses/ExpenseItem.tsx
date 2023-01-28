import { PropsWithChildren, useState } from "react";
import Expense from "../../models/Expense";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }: PropsWithChildren<Expense>) => {

  const [ _title, setTitle ] = useState(title);

  const clickHandler = () => { setTitle("Changed") }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{_title}</h2>
          <div className="expense-item__price">${amount.toFixed(2)}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

