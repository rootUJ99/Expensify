import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibilityExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import storeConfigure from './store/storeConfigure';

const store = storeConfigure();

store.dispatch(addExpense({ description: 'Water Bill',amount:4500 }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
//store.dispatch(setTextFilter('Gas'));
    const state = store.getState();
    const visibility = getVisibilityExpenses(state.expenses, state.filters);
    console.log(visibility);
//console.log(store.getState());
    setTimeout(()=>{
        store.dispatch(setTextFilter('water'));
    },3000)

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));