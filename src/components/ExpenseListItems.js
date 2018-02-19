import React from 'react';
import {Link} from 'react-router-dom';
const ExpenseListItem = ({ id, dispatch, description, amount, createdAt})=>(
    <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <h4>{amount}-{createdAt}</h4>
       
    </div>
);

export default ExpenseListItem;
