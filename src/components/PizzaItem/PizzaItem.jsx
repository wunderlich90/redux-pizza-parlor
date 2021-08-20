import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function PizzaItem ({ pizza }) {
    const history = useHistory();

    const [showRemove, setShowRemove] = useState(false);

    const toggleShowRemove = () => {
        setShowRemove(!showRemove);
    }

    function onClick() {
        history.push('/CustomerForm')
    }


    return (
        <> 
            {
                showRemove ?
                <div key={pizza.id}>
                    <img
                        name={pizza.name}
                        description={pizza.descriptiion}
                        price={pizza.price}
                        src={pizza.image_path}
                        
                    />
                    <button
                        onClick={() => {toggleShowRemove()}}
                    >
                        Add
                    </button>
                </div>
                :
                <div key={pizza.id}>
                    <img
                        name={pizza.name}
                        description={pizza.descriptiion}
                        price={pizza.price}
                        src={pizza.image_path}
                        
                    />
                    <button>Remove</button>
                </div>

            }
        
            <div>
                <button className="nextPage" onClick={onClick}>NEXT</button>
            </div>
        
        </>
    );
}

export default PizzaItem;