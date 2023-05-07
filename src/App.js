import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 101,
      title: "mirror",
      amount: 200,
      date: "march 19th 2023",
      locationofexpenditure: "mirror",
    },
    {
      id: 102,
      title: "table",
      amount: 1000,
      date: "march 20th 2023",
      locationofexpenditure: "table",
    },
    {
      id: 103,
      title: "car",
      amount: 25000,
      date: "march 18th 2023",
      locationofexpenditure: "car",
    },
    {
      id: 104,
      title: "fuel",
      amount: 1000,
      date: "march 17th 2023",
      locationofexpenditure: "fuel",
    },
  ];

  return (
    <div>
      <h1>lets get started</h1>
      <p>iam vikas</p>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          expenditure={expense.locationofexpenditure}
        />
      ))}
    </div>
  );
}

export default App;
