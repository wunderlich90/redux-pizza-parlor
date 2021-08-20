import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function PizzaItem ({ pizza }) {
    const history = useHistory();

    const [showAdd, setShowAdd] = useState(true);

    const toggleShowAdd = () => {
        setShowAdd(!showAdd);
    }

    function onClick() {
        history.push('/CustomerForm')
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
        
            <div>
                <button className="nextPage" onClick={onClick}>NEXT</button>
            </div>
        
        </>
    );
}

export default PizzaItem;