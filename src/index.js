import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const customer = (state = {}, action) => {
    if (action.type === 'SUBMIT_CUSTOMER_INFO') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
      customer
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore} >
            <App />
        </Provider>
    </React.StrictMode>
);

export default reduxStore;
