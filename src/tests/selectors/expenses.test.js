import selectExpense from '../../selectors/expenses';
const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: 1,
    description: 'Rent',
    note: '',
    amount: 200156,
    createdAt: -1000
}, {
    id: 1,
    description: 'Coffee',
    note: '',
    amount: 195,
    createdAt: 1000
}]
test('test for selectors', () => {
    const result = selectExpense();
}) 