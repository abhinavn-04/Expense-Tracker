import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card.jsx"
import React, { useState } from "react";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ok');
  const clickHandler = () => {
    setTitle('Updated')
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={clickHandler}>Update</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
