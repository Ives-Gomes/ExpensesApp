import React from 'react';

import ExpenseItem from './components/ExpenseItem';

import './global.css';

function App() {
  return (
    <>
      <ExpenseItem
        date={new Date()}
        title="Bicicleta"
        price={600}
      />
      <ExpenseItem
        date={new Date(2021, 4, 15)}
        title="Balão"
        price={5}
      />
    </>
  );
}

export default App;
