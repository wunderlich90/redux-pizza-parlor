import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

import PizzaItem from '../PizzaItem/PizzaItem';



function SelectPizza () {
   const history = useHistory();

   const pizzas = useSelector(store => store.pizzaReducer)

    function onClick () {
        history.push('/CustomerForm')
    }

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
                <div>
                    <button className="nextPage" onClick={onClick}>NEXT</button>
                </div>
            </div>

           

        </>
    );
} 

export default SelectPizza;
