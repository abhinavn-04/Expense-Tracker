
import './ExpenseForm.css'
const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="">Expense name</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Expense Amount</label>
                    <input type="number" min='0.01' step='0.05' />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Expense date</label>
                    <input type="date" min='2020-01-01' max='2021-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;