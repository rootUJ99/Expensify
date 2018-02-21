import React from 'react';
import { shallow } from 'enzyme';//read about shallow later on
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
//render expenseList 
test('sohuld render ExpenseList with expenses',()=>{
    const wrapper= shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
//render empty expenseList
test('should render ExpenseList with empty message',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});