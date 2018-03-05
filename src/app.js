import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpense } from './actions/expenses';
import { login,logout } from './actions/auth';
import getVisibilityExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import storeConfigure from './store/storeConfigure';
import { firebase } from './firebase/firebase';
import { LoginPage } from './components/LoginPage';
import LoadingPage from './components/LoadingPage';
const store = storeConfigure();

// store.dispatch(addExpense({ description: 'Water Bill',amount:4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill',amount:109500 }));
// store.dispatch(addExpense({ description: 'Light Bill',createdAt:1000 }));
//store.dispatch(setTextFilter('Gas'));
const state = store.getState();
const visibility = getVisibilityExpenses(state.expenses, state.filters);
console.log(visibility);
//console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRender = false;
const checkIfRender = () => {
    if (!hasRender) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRender = true;
    }
}



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        checkIfRender();
        store.dispatch(startSetExpense()).then(() => {
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(logout());
        checkIfRender();
        history.push('/');
    }
});

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

