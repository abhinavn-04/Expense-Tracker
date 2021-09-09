import ExpenseItem from "./components/ExpenseItem.js";
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
      <h2> Let 's get started!</h2>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} ></ExpenseItem>
      <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} ></ExpenseItem>
    </div>
  );
}

export default App;
