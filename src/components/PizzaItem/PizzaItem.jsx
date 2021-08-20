import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
   



function PizzaItem ({ pizza }) {
    const dispatch = useDispatch();
    const history = useHistory();


    const [showAdd, setShowAdd] = useState(true);

    const toggleShowAdd = () => {
        setShowAdd(!showAdd);
        switch (showAdd) {
            case true:
                return dispatch({
                    type: 'ADD_TO_CART',
                    payload: pizza
                })
            case false:
                return dispatch({
                    type: 'DELETE_CART',
                    payload: pizza
                })
        
            default:
                break;
        }



    }
   


    return (
        <div className="pageOne"> 
            {
                showAdd ?
                <div id="addPizzaDisplay">
                        <img src={pizza.image_path} />

                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>${pizza.price}</p>

                   
                    <button className="addButton"
                        onClick={() => {toggleShowAdd()}}
                    >
                        Add
                    </button>
                </div>
                :
                <div id="removePizzaDisplay">
                        <img src={pizza.image_path} />
     
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>${pizza.price}</p>

                    <button className="removeButton"
                        onClick={() => {toggleShowAdd()}}>
                        Remove
                    </button>
                </div>

            }
    
        
        </div>
    );
}

export default PizzaItem;