import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from '../Reducers';
import middleWares from '../Middleware';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middleWares)
);

export default store;