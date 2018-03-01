import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpense, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
const createMockStore = configMockStore([thunk]);
const uid ='testing123';
const defaultAuthState={auth:{uid}};
beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done());
});
//remove expense action
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});
//remove from firebase
test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toBeFalsy();
                done();
            });
    });
});
//edit expense action
test('should setup edit expense action object', () => {
    const action = editExpense('123', { 'note': 'got updated' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { 'note': 'got updated' }
    })
});

//add expense action
test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});
//add in firebase
test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });
});
//for default firebase values
test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense(expenseDefaults)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseDefaults);
                done();
            });
    });
});

test('test for set expenses', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})
//data fetching from firebase
test('test for fetching data from firebase', () => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSE',
            expense
        });
        done();
    });
});
//update in firebase
test('test for database updates', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 2500 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    })
        .then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        })
})
