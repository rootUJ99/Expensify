import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//addExpenses
const addExpenses = (
    {
    description = '',
        node = '',
        amount = 0,
        createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//removeExpenses
const removeExpenses = (
    { id } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expenses: {
        id
    }
});


//expenseReducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                (action.expenses)];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
};


//filterReducer
const filterReducerDefault = {
    text: '',
    sortBy: Date,
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);


//subscribr for tracking the changes 
store.subscribe(() => {
    console.log(store.getState());
});

//actions
const expenseOne = store.dispatch(addExpenses({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpenses({ description: 'Coffee', amount: 5 }));
store.dispatch(removeExpenses({ id: expenseOne.expenses.id }));
// console.log(expenseOne);

//initializing state with some values
const demoState = {
    expenses: [{
        id: 'xyz',
        description: 'Jan rent',
        node: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};