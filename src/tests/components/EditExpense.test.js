import React from 'react';
import { EditExpanse } from '../../components/EditExpanse'
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpanse editExpense={editExpense}
            history={history}
            removeExpense={removeExpense}
            expense={expenses[1]}
        />);
})
test('should EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense Spice',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test('should handle removeExpense spice',()=>{
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({id:expenses[1].id})
});