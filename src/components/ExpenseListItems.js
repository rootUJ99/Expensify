import React from 'react';
const ExpenseListItem = ({ description, amount, createdAt})=>(
    <div>
    <h3>{description}</h3>
    <h4>{amount}-{createdAt}</h4>
    </div>
);
export default ExpenseListItem;