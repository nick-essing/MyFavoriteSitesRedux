import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import immutable from 'immutable';
import App from './components/App';
import rootReducer from './reducers/index';
import { fetchData } from './actions/fetchData';

async function init() {

    if (__DEV__ || __STAGING__) {
        const installDevTools = require('immutable-devtools');
        installDevTools(immutable);
    }

    const storeMiddleware = [thunk];

    if (__DEV__ || __STAGING__) {
        storeMiddleware.push(require('redux-logger').default);
    }

    console.log(storeMiddleware);

    const store = createStore(
        rootReducer,
        applyMiddleware(...storeMiddleware)
    );
    try {
        await chayns.ready;

        const tappElement = document.querySelector('.tapp');
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>, tappElement
        );
    } catch (err) {
        console.warn('no chayns environment found');
    }

    store.dispatch(fetchData("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=10"));
}

init();
