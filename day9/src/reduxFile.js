/**
 * Created by swati on 11/5/17.
 */
import { createStore } from 'redux';

console.log("This is a react");

var initialState = {
    counter :0
};

function reducer(state = initialState,action) {
    console.log("state,action");
    console.log(state,action);

    switch (state) {
        case 'INC' : let counter = state.counter + action.data;
                    return {...state,counter};
        case 'DEC' : let counter = state.counter - action.data;
            return {...state,counter};
    }
    return state;
}

store = createStore(reducer);
store.subscribe(() => console.log("current state :",store.getState()));

store.dispatch('INC',5);
store.dispatch('INC',5);
store.dispatch('INC',5);
store.dispatch('INC',5);
store.dispatch('INC',5);
store.dispatch('INC',5);
