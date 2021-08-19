import React from 'react';
import {useSelector} from 'react-redux';

function Checkout () {
    const customerInfo = useSelector(store => store.customerInfoReducer);
    console.log('Customer Info', customerInfo);

    return (
        <>
            <h3>Step 3: Checkout</h3>
            {customerInfo.map((customer, index) =>
            <div key={index}>
                <p>{customer.name}</p>
                <p>{customer.streetAddress}</p>
                <p>{customer.city}, {customer.zip}</p>  
            </div>
            )}
            
        </>
    )
} // end Checkout

export default Checkout;