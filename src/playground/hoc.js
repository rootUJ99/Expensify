import React from 'react';
import ReactDOM from 'react-dom';
const Info =(props)=>(
    <div>
    <h1>Hello</h1>
        <p>{props.discription}</p>
    </div>
);
const hoc=(HocArg)=>{
    return (props)=>(
        <div>
        {props.isAdmin&&<p>this is private info please dont share </p>}
        <HocArg {...props}/>
        </div>);
}
const auth=(AuthArg)=>{
    return (props)=>(
        <div>
            {props.isAuth ? (<AuthArg {...props} />):(<p>please log in</p>)}
        
        </div>
    );
}
const Admin=auth(Info);
ReactDOM.render(<Admin isAdmin={true} isAuth={true} discription="these are some details"/>,document.getElementById('app'))