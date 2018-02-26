import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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
