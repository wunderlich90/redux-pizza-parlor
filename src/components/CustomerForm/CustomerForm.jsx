import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function CheckoutForm () {

    const history = useHistory();

    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        streetAddress: '',
        city: '',
        zip: '',
        getOrder: ''
    })

    const handleInputChange = (event) => {
        setCustomerInfo({
            // Spread-operator
            // Handles all user inputs
            ...customerInfo, 
                [event.target.name]: event.target.value,
        });
    } // end handleInputChange


    const onSubmit = (event) => {
        // Prevent page refresh on submit
        event.preventDefault(event);
        console.log('Adding Customer Info:', customerInfo);

        // Clear inputs
        setCustomerInfo({
            name: '',
            streetAddress: '',
            city: '',
            zip: '',
            getOrder: ''
        });

        history.push('/Checkout')
    } // end onSubmit

    return (
        <div>
            <h3>Step 2: Customer Information</h3>

            <form onSubmit={onSubmit}>
                <div className="textInput">
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="Street Address"
                        name="streetAddress"
                        value={customerInfo.streetAddress}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="Zip"
                        name="zip"
                        value={customerInfo.zip}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="Delivery or Pickup"
                        name="getOrder"
                        value={customerInfo.getOrder}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="nextBtnPageTwo">
                    <button type="submit">NEXT</button>
                </div>

            </form>
        </div>
    ) // end return
} // end Checkout Form

export default CheckoutForm;