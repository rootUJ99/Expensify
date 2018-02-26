import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
export class AddExpanse extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="container" >
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispathToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispathToProps)(AddExpanse);