import React from 'react';

import './ExpenseItem.css';

function ExpenseItem({ date, title, price }) {
  const day = date.toLocaleString('pt-BR', { day: '2-digit' });
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          R$
          {price}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
