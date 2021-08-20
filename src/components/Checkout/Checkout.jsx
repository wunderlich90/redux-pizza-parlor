import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function Checkout ({getPizzas}) {
    const dispatch = useDispatch();
    const history = useHistory();
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
      

    function clickHandler () {
        confirm('Are you ready to checkout?')
        // Dispatch to clear user data
        // Will need to change the reducer to clear cart reducer
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
        // Takes user to home page
        history.push('/home');
    }

    return (
        <div className="pageThree">
            <h1>Step 3: Checkout</h1>
            {customerInfo.map((customer, index) =>
            <div key={index} id="customerInfoPageThree">
                <div>
                    <p>{customer.name}</p>
                    <p>{customer.streetAddress}</p>
                    <p>{customer.city}, {customer.zip}</p> 
                </div>
                <div id="getOrder">
                    <p>For {customer.getOrder}</p>
                </div>
            </div>
            )}
            
            <div>
                <table id="checkoutTable">
                    <thead>
                        <th>Name</th>
                        <th>Cost</th>
                    </thead>
                    <tbody>
                        {/* Show customer info here */}
                    </tbody>
                </table>
                
                <div>

                </div>

                <div id="checkoutBtn">
                    <button className="nextPage" onClick={clickHandler}>CHECKOUT</button>
                </div>
            </div>
            
        </div>
    )
} // end Checkout

export default Checkout;