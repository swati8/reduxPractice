import React from 'react';
import { render } from 'react-dom';
import App from './component/App';
import { Provider} from 'react-redux';
import store from './Store';

const elem = document.getElementById('app');

render (
    <Provider store={store}>
    <App/>
    </Provider>, elem
);