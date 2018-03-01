import React, { Component} from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage=({startLogin})=> (
            <div>
                <button onClick={startLogin}>Login</button>
            </div>
        )
const matchDispatchProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
});
export default connect(undefined,matchDispatchProps)(LoginPage);