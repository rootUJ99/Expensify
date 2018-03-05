import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';
export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className="page-header">
        <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount} {expenseWord}</span> totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions"></div>
                <Link className="button2" to="/create">Add Expense</Link>
        </div>
        </div>
    );
}
const mapStateToProps=(state)=>{
    const visiblityExpenses = selectExpenses(state.expenses,state.filters);
    return{
        expenseCount:visiblityExpenses.length,
        expensesTotal:selectExpensesTotal(visiblityExpenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary);
