import { useState } from 'react';

function PizzaItem ({ pizza }) {

    const [showRemove, setShowRemove] = useState(false);

    const toggleShowRemove = () => {
        setShowRemove(!showRemove);
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
        
        
        
        </>
    );
}

export default PizzaItem;