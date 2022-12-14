import React, { useState } from 'react';

const ItemCount = ({ stockItems }) => {


    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(stockItems);

    const stockAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const stockRest = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    };

    const onAdd = () => {
        if (counter <= stock && counter > 0) {
            setStock(stock - counter);
            setCounter(0);
            console.log("Agregaste: " + counter + " productos al carrito");
        }
    };

    return (
        <div className="itemCount-cont">
            <div className="counters">
                        <button
                            type="button"
                            className="btn itemcount-btn"
                            onClick={stockRest}>
                            -
                        </button>
                        <button
                            type="button"
                            className="btn itemcount-btn"
                            disabled>
                            {counter}
                        </button>
                        <button
                            type="button"
                            className="btn itemcount-btn"
                            onClick={stockAdd}>
                            +
                        </button>

            </div>
            <div className="add-btn">

                    <button
                        className="btn itemcount-btn"
                        onClick={onAdd}>
                        Agregar al carrito
                    </button>

            </div>

        </div>
    )
}

export default ItemCount;