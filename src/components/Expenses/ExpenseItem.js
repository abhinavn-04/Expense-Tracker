import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js"
function ExpenseItem(props) {
  // const expenseItem = "Laptop Repair";
  // const expenseDate = new Date(2021, 9, 9);
  // const expensePrice = 81.99;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
