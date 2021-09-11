import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
const sample_expenses = [
  {
    title: "Laptop Repair",
    date: new Date(2021, 9, 9),
    amount: 81.99,
    id: 101,
  },
  {
    title: "Fuel",
    date: new Date(2021, 9, 7),
    amount: 10,
    id: 102,
  },
  {
    title: "Electricity Bill",
    date: new Date(2021, 8, 15),
    amount: 75,
    id: 103,
  },
  {
    title: "Shopping",
    date: new Date(2021, 9, 1),
    amount: 50,
    id: 104,
  },
];
function App() {
  const [expenses, setExpenses] = useState(sample_expenses);
  const addExpenseHandler = (expenseData) => {
    const newExpense = { ...expenseData };
    console.log(newExpense);
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;