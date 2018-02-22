import React from 'react';
import { AddExpanse } from '../../components/AddExpanse'
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
let history, wrapper, addExpense;
beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpanse addExpense={addExpense} history={history} />);
});
test('should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});