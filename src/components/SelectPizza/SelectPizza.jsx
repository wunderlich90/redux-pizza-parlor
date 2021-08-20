import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';



function SelectPizza () {
   

   const pizzas = useSelector(store => store.checkoutReducer)

    

    return (
        <>
          <h1>Pizza's</h1>

            <div>
                {pizzas.map((pizza) => (
                    <PizzaItem
                        pizza={pizza}
                    />
                ))}
            </div>

           

        </>
    );
} 

export default SelectPizza;
