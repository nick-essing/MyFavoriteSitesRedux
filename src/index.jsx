import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import immutable from 'immutable';
import App from './components/App';
import rootReducer from './reducers/indexReducer';

async function init() {
    
    if (__DEV__ || __STAGING__) {
        const installDevTools = require('immutable-devtools');
        installDevTools(immutable);
    }

    const storeMiddleware = [thunk];

    if (__DEV__ || __STAGING__) {
        storeMiddleware.push(require('redux-logger').default);
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...storeMiddleware)
    );
    try {
        await chayns.ready;

        const tappElement = document.querySelector('.tapp');
        // TODO: ESLINT!!!!!
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            tappElement
        );
    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
