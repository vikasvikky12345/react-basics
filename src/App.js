import React, { useState } from 'react';
import NewExpense from './NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 101,
      title: "mirror",
      amount: 2000,
      date: new Date(2023, 5, 19),
      locationofexpenditure: "mirror",
    },
    {
      id: 102,
      title: "table",
      amount: 10000,
      date: new Date(2023, 9, 20),
      locationofexpenditure: "table",
    },
    {
      id: 103,
      title: "car",
      amount: 25000,
      date: new Date(2023, 8, 18),
      locationofexpenditure: "car",
    },
    {
      id: 104,
      title: "fuel",
      amount: 1000,
      date: new Date(2023, 7, 17),
      locationofexpenditure: "fuel",
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
