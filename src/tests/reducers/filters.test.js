import filterReducer from '../../reducers/filters';
import moment from 'moment';
//for setting up default filter values 
test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});
//sortByAmount 
test('should set sortBy amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});
//sortByDate
test('should set sortBy date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});
//after settiing text value
test('should set text',()=>{
    const text='testing 123'
    const action={
        type: 'SET_TEXT',
        text
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
});
//setting start date
test('should set Startdate', () => {
    const startDate = moment().startOf('month')
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});
//setting end date
test('should set EndDate', () => {
    const endDate = moment().startOf('month')
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
})