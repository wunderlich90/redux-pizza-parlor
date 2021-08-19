import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const pizzaReducer = (state = [], action) => {
    // Pizzas added to the cart
    switch (action.type) {
        case 'SET_PIZZA_LIST':
            return action.payload
        default:
    }

    return state;
};

const checkoutReducer = (state = [], action) => {
    // Pizzas added to the cart
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'DELETE_CART':
            return [];
        default:
    }

    return state;
};

const customerInfoReducer = (state = [], action) => {
    switch (action.type) {
        case "CUSTOMER_FORM":
            return [...state, action.payload]
    
        default:
            return state
    }
}

// Store
const storeInstance = createStore(
    combineReducers({
        // Add Reducers as needed
        checkoutReducer,
        customerInfoReducer
        pizzaReducer
    }),   
    applyMiddleware(
        logger
    ) 
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
<Provider store={storeInstance}>
    <App /> 
</Provider>,
document.getElementById('root')
);

