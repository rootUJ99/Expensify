import selectExpense from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'
//selector for somevalues
test('test for selectors', () => {
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});
//selector for startDate
test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const result = selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});
//selector for endDate
test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    };
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});
//selector for date order
test('should filter by right date order',()=>{
    const filters={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})
//selector for right amount order
test('should filter by right amount order', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})