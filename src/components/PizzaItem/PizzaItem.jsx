import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem ({ pizza }) {
    const dispatch = useDispatch();

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
        <> 
            {
                showAdd ?
                <div>
                    <ul>
                        <li>{pizza.name}</li>
                        <li>{pizza.description}</li>
                        <li>{pizza.price}</li>

                    </ul>
                    <img
                       
                        src={pizza.image_path}
                        
                    />
                    <button className="addButton"
                        onClick={() => {toggleShowAdd()}}
                    >
                        Add
                    </button>
                </div>
                :
                <div>
                    <ul>
                        <li>{pizza.name}</li>
                        <li>{pizza.description}</li>
                        <li>{pizza.price}</li>

                    </ul>
                    <img
                       
                        src={pizza.image_path}
                        
                    />
                    <button className="removeButton"
                        onClick={() => {toggleShowAdd()}}>
                        Remove
                    </button>
                </div>

            }
        
        
        
        </>
    );
}

export default PizzaItem;