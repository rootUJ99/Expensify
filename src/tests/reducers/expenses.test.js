import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import { escapeExpression } from 'handlebars';
//test for default state
test('should set default state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});
//test for remove expense
test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
//test for keeping dataset as it is if id not found
test('should add expense by id if id not found display all', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
//test for addding expenses
test('should add an expense',()=>{
    const expense = {
        id: 4,
        description: 'Chai',
        note: '',
        amount: 11,
        createdAt: 0
    }
    const action={
        type: 'ADD_EXPENSE',
        expense
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});
//test for editing database 
test('should edit an expense',()=>{
    const amount= 11;
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount
        }
    }
    const state=expenseReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
})
//test for returning data as it is if expense id not found for editing pupopse
test('should edit an expense if id not found', () => {
    const amount = 11;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses',()=>{
    const action = {
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});