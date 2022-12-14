import React, { useState } from 'react';

const ItemCount = ({ stockItems }) => {

    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(stockItems);
    console.log(stock)

    const stockAdd = () =>{
        if (counter < stock){
            setCounter(counter + 1);
        }
    };

    const stockRest = () =>{
        if (counter > 0 ){
            setCounter(counter - 1)
        }
    };

    const onAdd = ()=> {
        if (counter <= stock && counter > 0){
            setStock(stock - counter);
            setCounter(0);
            console.log("Agregaste: " + counter + " productos al carrito");
        } 
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-2'>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={stockRest}>
                                -
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-outline-primary"
                            disabled>
                                { counter }
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-outline-primary"
                            onClick={stockAdd}>    
                                +
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button
                        className="btn btn-outline-primary" 
                        onClick={onAdd}>
                            Agregar al carrito
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ItemCount;