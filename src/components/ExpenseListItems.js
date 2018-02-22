import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({ id, dispatch, description, amount, createdAt})=>(
    <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <h4>
    {numeral(amount).format('$0,0.00')}
    -
    {moment(createdAt).format('Do MMMM YYYY')}</h4>  
    </div>
);

export default ExpenseListItem;
