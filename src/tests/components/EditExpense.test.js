import React from 'react';
import { EditExpanse } from '../../components/EditExpanse'
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpanse startEditExpense={startEditExpense}
            history={history}
            startRemoveExpense={startRemoveExpense}
            expense={expenses[1]}
        />);
})
test('should EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense Spice',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test('should handle startRemoveExpense spice',()=>{
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({id:expenses[1].id})
});