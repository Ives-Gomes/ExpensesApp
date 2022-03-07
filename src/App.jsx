import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import './global.css';

function App() {
  return (
    <>
      <NewExpense />
      <Expenses />
    </>
  );
}

export default App;
