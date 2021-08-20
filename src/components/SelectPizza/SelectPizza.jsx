import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react'; 
import PizzaItem from '../PizzaItem/PizzaItem';


function SelectPizza () {

   const pizzas = useSelector(store => store.pizzaReducer)




    return (
        <>
          <h1>Pizza's</h1>

            <div>
                {pizzas.map(pizza => (
                    <PizzaItem key={pizza.id}
                        pizza={pizza}
                    />
                ))}
            </div>
            <div>
                <button className="pageOneNext">
                    NEXT
                </button>
            </div>

        </>
    );
} 

export default SelectPizza;
