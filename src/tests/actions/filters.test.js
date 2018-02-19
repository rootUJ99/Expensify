import {setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

//setTextFilter
test('setTextFilter test',()=>{
    const text = 'chai';
    const action=setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text:'chai'
    });
});

//setTextFilter default values
test('setTextFilter test for default', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

//sortByDate
test('sortByDate test', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

//sortByAmount
test('sortByAmount test', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

//startDate
test('testing start date ',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    });
});

//EndDate
test('testing end date ',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});