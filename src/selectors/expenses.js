import moment from 'moment';
//Get visibility Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //for 
        const createdAtMoment=moment(expense.createdAt);
        //for calander
        const startDateMatch =startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') :true
        //for calander
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        //for searching purpose
        const textMatch = typeof text !== 'string' || (expense.description.toLocaleLowerCase()).includes(text.toLocaleLowerCase())
        return startDateMatch && endDateMatch && textMatch
        //for select menu
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}
