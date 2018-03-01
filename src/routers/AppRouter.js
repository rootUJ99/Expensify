import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
import ExpensifyDashBoard from '../components/ExpensifyDashBoard';
import HelpExpanse from '../components/HelpExpanse';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from  './PrivateRoutes';
import PublicRoute from './PublicRoutes';
export const history = createHistory();
// import Total from '../components/ExpensesTotal';
//all the routes resides here 
let AppRouter = ()=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpensifyDashBoard} />
                <PrivateRoute path="/create" component={AddExpanse} />
                <PrivateRoute path="/edit/:id" component={EditExpanse} />
                <PublicRoute component={NotFound} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;
