import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";
const ExpenseList = props => {
    if (props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                <p>No Expenses Found!!</p>
            </h2>
        )
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense,index) => (
                <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    )
}
export default ExpenseList;