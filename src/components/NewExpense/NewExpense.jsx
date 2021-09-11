import './NewExpense.css'
import ExpenseForm from './ExpenseForm.jsx'
import { useState } from 'react'
const NewExpense = (props) => {
    const enteringDataHandler = (expenseData) => {
        const newExpense = { ...expenseData };
        props.onAddExpense(newExpense);
    }
    const [formRendering, setFormRendering] = useState(false);
    const formRenderingHandler = () => {
        setFormRendering(true);
    }
    const stopFormRendering = () => {
        setFormRendering(false);
    }
    return (
        <div className="new-expense">
            {!formRendering && <button onClick={formRenderingHandler}>Add new Expense</button>}
            {formRendering && <ExpenseForm onCancel={stopFormRendering} onEnteringData={enteringDataHandler} />}
        </div>
    )
}
export default NewExpense;