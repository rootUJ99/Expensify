import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListItems from './ExpenseListItems';
import ExpenseListFilters from './ExpenseListFilters';
const ExpensifyDashBoard = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);
export default ExpensifyDashBoard;