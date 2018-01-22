import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
import ExpensifyDashBoard from '../components/ExpensifyDashBoard';
import HelpExpanse from '../components/HelpExpanse';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

let AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashBoard} exact={true} />
                <Route path="/help" component={HelpExpanse} />
                <Route path="/create" component={AddExpanse} />
                <Route path="/edit/:id" component={EditExpanse} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
