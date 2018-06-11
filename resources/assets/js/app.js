
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import allReducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// const store = createStore(
//     allReducers
// );

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
