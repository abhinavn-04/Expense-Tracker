import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [newTitle, setTitle] = useState('');
    const [newAmount, setAmount] = useState('');
    const [newDate, setDate] = useState('');

    const titleHandler = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    };
    const amountHandler = (event) => {
        // console.log(event.target.value);
        setAmount(event.target.value);
    };
    const dateHandler = (event) => {
        // console.log(event.target.value);
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        };
        // console.log(newExpense);
        props.onEnteringData(newExpense);
        setDate('');
        setTitle('');
        setAmount('');
    }
    const stopRendering = () => {
        props.onCancel();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="">Expense name</label>
                    <input type="text" onChange={titleHandler} value={newTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Expense Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountHandler} value={newAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Expense date</label>
                    <input type="date" min='2001-01-01' max='2021-12-31' onChange={dateHandler} value={newDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={stopRendering}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;