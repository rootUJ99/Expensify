import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItems';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
//render expenseListItems
test('should test expenseListItems',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});