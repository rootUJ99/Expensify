import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="active-nav">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="active-nav">Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);
const mapDispatchProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})
export default connect(undefined, mapDispatchProps)(Header);