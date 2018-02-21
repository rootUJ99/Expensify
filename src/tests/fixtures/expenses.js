//this is the test dataset used in various actions and reducers
import moment from 'moment';
export default [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 200156,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'Coffee',
    note: '',
    amount: 250,
    createdAt: moment(0).add(4, 'days').valueOf()
}]