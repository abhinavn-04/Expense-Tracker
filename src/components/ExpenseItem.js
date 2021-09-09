import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
function ExpenseItem(data) {
  // const expenseItem = "Laptop Repair";
  // const expenseDate = new Date(2021, 9, 9);
  // const expensePrice = 81.99;

  return (
    <div className="expense-item">
      <ExpenseDate date={data.date}/>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">${data.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
