import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import './global.css';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: 'Bike',
    amount: 600,
    date: new Date(2022, 8, 20),
  },
  {
    id: Math.random().toString(),
    title: 'Bottle',
    amount: 2,
    date: new Date(2021, 3, 14),
  },
  {
    id: Math.random().toString(),
    title: 'Cable',
    amount: 40,
    date: new Date(2021, 9, 5),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
