import Expenses from "./components/Expenses";

// import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "ramen",
      amount: 3.73,
      date: new Date(2019, 6, 7),
    },
    {
      id: "e2",
      title: "yogurt",
      amount: 6.26,
      date: new Date(2002, 0, 11),
    },
    {
      id: "e3",
      title: "hat",
      amount: 14.92,
      date: new Date(2018, 5, 26),
    },
    {
      id: "e4",
      title: "carupisu",
      amount: 1.01,
      date: new Date(2018, 6, 31),
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
