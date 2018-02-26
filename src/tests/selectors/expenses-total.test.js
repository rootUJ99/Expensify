import expenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',()=>{
    const res=expenseTotal([]);
    expect(res).toBe(0);
})

test('should return single amount value', () => {
    const res = expenseTotal([expenses[0]]);
    expect(res).toBe(195);
})

test('should return addition of ', () => {
    const res = expenseTotal(expenses);
    expect(res).toBe(200601);
})