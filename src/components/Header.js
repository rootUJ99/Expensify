import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active-nav" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="active-nav">Create</NavLink>
        <NavLink to="/edit" activeClassName="active-nav">Edit</NavLink>
    </header>
);
export default Header;