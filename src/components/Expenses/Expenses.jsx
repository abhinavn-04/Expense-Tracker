import './Expenses.css'
import ExpenseList from './ExpenseList';
import Card from '../UI/Card.jsx'
import ExpensesFilter from './ExpenseFilter.jsx';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');
    const filterChangeHandler = (year) => {
        setFilterYear(year);
    }
    const fileterdExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={filterYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={fileterdExpenses}/>
                <ExpenseList items={ fileterdExpenses }/>
            </Card>
        </div>
    )
}

export default Expenses;