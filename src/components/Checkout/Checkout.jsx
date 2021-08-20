import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';


function Checkout ({getPizzas}) {
    const dispatch = useDispatch();
    const customerInfo = useSelector(store => store.customerInfoReducer);

    // let order = [];
    // let customer1 = {};
    // let numbers2 = {};
    // let test = [{
    //     num: 1,
    //     num2: 2,
    //     num3: 3
    // }]

    // for (let customer of customerInfo) {
    //     for (let number of test) {
    //         customer1 = {customer};
    //         numbers2 = {number}
    //         order.push(customer, numbers2);
    //     }
    // }

        // console.log('order', order);




        // confirm('Are you sure you want to checkout?'); 

        axios({
            method: 'POST',
            url: '/api/pizza',
            data: newPizza
        }).then(response => {
            console.log('POST /api/pizza', response);

            dispatch ({
                type: 'CLEAR_CART'
            });

        }).catch(err => {
            console.log('POST /api/pizza failed', err);
        });
      

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
            <button>NEXT</button>
            
        </>
    )
} // end Checkout

export default Checkout;