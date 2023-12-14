import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload;
    }
    return state;
}

const cart = (state = [], action) => {
    if (action.type === 'CLEAR') {
        return [];
    }
    if (action.type === 'ADD_PIZZA_ITEM') {
        return [...state, action.payload];
    }
    return state;
}

const customer = (state = 
    {customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: ''}, action) => {
    if (action.type === 'CLEAR') {
        return {};
    }
    if (action.type === 'SUBMIT_CUSTOMER_INFO') {
        return action.payload;
    }
    return state;
}

const total = (state = 0, action) => {
    if (action.type === 'CLEAR') {
        return 0;
    }
    if (action.type === 'ADD_PIZZA_ITEM') {
        return state + (action.payload.pizza.price * action.payload.quantity);
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
      customer,
      total,
      pizzaList,
      cart
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
