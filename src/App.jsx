import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import './global.css';

function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </>
  );
}

export default App;
