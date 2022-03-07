import React, { useState } from 'react';

import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './style.css';

function Expenses() {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

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
