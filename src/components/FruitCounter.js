import React, {useState} from 'react';
import './FruitCounter.css';


export function fruitCounter ({emoji, title, setCounter, counter}){

    function decreaseCounter() {
        setCounter(counter - 1)
    };

    function increaseCounter() {
        setCounter(counter + 1)
    };


    return (


        <fieldset>

            <div className="fruit-counter">
                <h2>{emoji} {title}</h2>
                <button
                    type="button"
                    onClick={decreaseCounter}
                    disabled={counter === 0 }
                >-</button>
                {counter}
                <button
                    type="button"
                    onClick={increaseCounter}
                >+</button>
            </div>
        </fieldset>
    );
}


export default fruitCounter