import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { startSetExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibilityExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import storeConfigure from './store/storeConfigure';
import './firebase/firebase';

const store = storeConfigure();

// store.dispatch(addExpense({ description: 'Water Bill',amount:4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill',amount:109500 }));
// store.dispatch(addExpense({ description: 'Light Bill',createdAt:1000 }));
//store.dispatch(setTextFilter('Gas'));
    const state = store.getState();
    const visibility = getVisibilityExpenses(state.expenses, state.filters);
    console.log(visibility);
//console.log(store.getState());

// console.log('test');
const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
})
