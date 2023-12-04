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

// added fake pizza list for testing -Robin
const pizzaList = (state = ['one cheese pizza'], action) => {
    return state;
}

// added fake total for testing -Robin
const total = (state =19.99, action) => {
    return state;
}

const reduxStore = createStore(
    combineReducers({
      customer,
      total,
      pizzaList
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


