import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from './components/NewExpense/NewExpense.jsx'
function App() {
  const expenses = [
    {
      title: "Laptop Repair",
      date: new Date(2021, 9, 9),
      price: 81.99,
      id: 101,
    },
    {
      title: "Fuel",
      date: new Date(2021, 9, 7),
      price: 10,
      id: 102,
    },
    {
      title: "Electricity Bill",
      date: new Date(2021, 8, 15),
      price: 75,
      id: 103,
    },
    {
      title: "Shopping",
      date: new Date(2021, 9, 1),
      price: 50,
      id: 104,
    }
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
