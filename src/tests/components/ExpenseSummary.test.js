import React from 'react'
import {shallow} from 'enzyme';
export default ExpenseSummary;
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={2354155} />);
    expect(wrapper).toMatchSnapshot();
});