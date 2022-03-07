import React, { useState } from 'react';

import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './style.css';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
