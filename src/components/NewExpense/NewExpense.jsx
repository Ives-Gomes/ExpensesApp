import React, { useState } from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './style.css';

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    stopEditingHandler(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button
          type="button"
          onClick={startEditingHandler}
        >
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
