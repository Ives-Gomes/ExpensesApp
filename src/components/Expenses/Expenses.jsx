import React from 'react';

import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './style.css';

function Expenses() {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
