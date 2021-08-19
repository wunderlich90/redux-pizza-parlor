import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';;

function Checkout () {
    const history = useHistory();
    const customerInfo = useSelector(store => store.customerInfoReducer);
    console.log('Customer Info', customerInfo);

    function clickHandler () {
        // Takes user to home page
        history.push('/');
    }

    return (
        <>
            <h1>Step 3: Checkout</h1>
            {customerInfo.map((customer, index) =>
            <div key={index}>
                <p>{customer.name}</p>
                <p>{customer.streetAddress}</p>
                <p>{customer.city}, {customer.zip}</p> 
                <p>{customer.getOrder}</p> 
            </div>
            )}
            <button onClick={clickHandler}>CHECKOUT</button>
            
        </>
    )
} // end Checkout

export default Checkout;