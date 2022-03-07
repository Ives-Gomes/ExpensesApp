import React, { useState } from 'react';

import Card from '../../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

import './style.css';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const formattedDate = expense.date.getFullYear().toString();

    return formattedDate === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
