import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './style.css';

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
