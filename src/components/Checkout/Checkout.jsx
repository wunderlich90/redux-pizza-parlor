import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout () {
    const dispatch = useDispatch();
    const history = useHistory();
    const customerInfo = useSelector(store => store.customerInfoReducer);
    console.log('Customer Info', customerInfo);

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