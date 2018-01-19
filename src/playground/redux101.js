import { createStore } from 'redux'
const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const setCount=({setBy}={})=>({
    type:'SET',
    setBy
});

const resetCount=({resetBy}={})=>({
    type:'RESET',
    resetBy
});


// const add=({a,b})=>{
//     return a+b;
// }
// console.log(add({a:1,b:2}));
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: action.resetBy
            };
        default:
            return state;
    }
}
const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// unsubscribe();

store.dispatch(incrementCount());
console.log(store.getState());

store.dispatch(incrementCount({incrementBy:5}))
console.log(store.getState());

store.dispatch(decrementCount());
console.log(store.getState());

store.dispatch(decrementCount({decrementBy:5}))
console.log(store.getState());

store.dispatch(setCount({setBy:100}))
console.log(store.getState());

store.dispatch(resetCount({resetBy:0}));
console.log(store.getState());

store.dispatch({
    type: 'RESET'
});
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });
store.dispatch({
    type: 'SET',
    count: 101
})
// console.log(store.getState());