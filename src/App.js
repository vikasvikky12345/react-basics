import Expenses from './components/Expenses/Expenses';

const App = () =>{
  const expenses = [
    {
      id: 101,
      title: "mirror",
      amount: 200,
      date: new Date(2023, 2, 19),
      locationofexpenditure: "mirror",
    },
    {
      id: 102,
      title: "table",
      amount: 1000,
      date: new Date(2023, 2, 20),
      locationofexpenditure: "table",
    },
    {
      id: 103,
      title: "car",
      amount: 25000,
      date: new Date(2023, 2, 18),
      locationofexpenditure: "car",
    },
    {
      id: 104,
      title: "fuel",
      amount: 1000,
      date: new Date(2023, 2, 17),
      locationofexpenditure: "fuel",
    },
  ];

  return (
    <div>
      <h1>lets get started</h1>
      <p>iam vikas</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
