import { useLayoutEffect } from 'react';
import { useState } from 'react';

function PizzaItem ({ pizza }) {

    const [showAdd, setShowAdd] = useState(true);

    const toggleShowAdd = () => {
        setShowAdd(!showAdd);
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
                    <button className="removeButton">Remove</button>
                </div>

            }
        
        
        
        </>
    );
}

export default PizzaItem;