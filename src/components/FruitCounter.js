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


        <section className="fruit-counter">
            <article >
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
            </article>
        </section>
    );
}


export default fruitCounter