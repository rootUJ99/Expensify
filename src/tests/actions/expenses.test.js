import {addExpense, removeExpense, editExpense } from '../../actions/expenses';
//remove expense action
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});
//edit expense action
test('should setup edit expense action object', () => {
    const action = editExpense(123,{'note':'got updated'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: { 'note': 'got updated' }
    })
});
//add expense action
test('should setup add expense action object with provided values',()=>{
    const expenseData={
        description:'Rent',
        amount:1000,
        createdAt:1000,
        note:'this is provided inputs'
    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            ...expenseData
        }
    })
});
//add expense with dafault values
test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
});