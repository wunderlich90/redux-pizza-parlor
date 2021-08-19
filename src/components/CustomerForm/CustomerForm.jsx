

function CheckoutForm () {


    const onSubmit = (event) => {
        // Prevent page refresh on submit
        event.preventDefault(event);
    }

    return (
        <div>
            <h3>Step 2: Customer Information</h3>

            <form onSubmit={onSubmit}>
                <div className="textInput">
                    <input 
                        type="text"
                        placeholder="Name"
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="Street Address"
                    />

                    <br></br>

                    <input
                        type="text"
                        placeholder="City"
                    />
                    <br></br>

                    <input
                        type="text"
                        placeholder="Zip"
                    />
                </div>

                <br></br>

                <div className="radioInput">
                    <div>
                        <input
                            type="radio"
                            placeholder="Pickup"
                        />
                        <p>Pickup</p>
                    </div>
                    <div>
                        <input
                            type="radio"
                            placeholder="Delivery"
                        />
                        <p>Delivery</p>
                    </div>
                </div>
            </form>
        </div>
    ) // end return
} // end Checkout Form

export default CheckoutForm