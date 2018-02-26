import React from 'react';
import { AddExpanse } from '../../components/AddExpanse'
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
let history, wrapper, startAddExpense;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpanse startAddExpense={startAddExpense} history={history} />);
});
test('should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});