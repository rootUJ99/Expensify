import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
        <h1>Expensify Application</h1>
            <button className="button" onClick={startLogin}>Login</button>
        </div>
    </div>
)
const matchDispatchProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, matchDispatchProps)(LoginPage);