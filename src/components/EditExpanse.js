import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, removeExpense } from '../actions/expenses';
const EditExpanse = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    props.history.push('/');
                    console.log('updated', expense);
                }}
            />
            <button 
                onClick={() => { 
                    props.dispatch(removeExpense({ id:props.expense.id })) 
                    props.history.push('/');
                }}> Remove </button>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpanse);