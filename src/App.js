import React, {useState} from 'react';
import "./App.css";
import FruitCounter from './components/FruitCounter';
import {Form} from './components/Form';
import screenshotLogo from './assets/screenshot-logo.png';



function App() {
    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    function resetCounter() {
        setCounterAardbeien(0);
        setCounterBananen(0);
        setCounterAppels(0);
        setCounterKiwis(0);

    }

    console.log("Fruit bestelling- aardbeien: {counterAardbeien}, bananen: {counterBananen}, appel: {counterAppels}, kiwi's: {counterKiwis}");




    return (
        <>
            <img src={screenshotLogo} width="670" height="150" alt="logo-image"/>

            <section className="fruitform">
                <FruitCounter
                    emoji="🍓"
                    title="Aardbeien"
                    counter={counterAardbeien}
                    setCounter={setCounterAardbeien}
                />
                <FruitCounter
                    emoji="🍌"
                    title="Bananen"
                    counter={counterBananen}
                    setCounter={setCounterBananen}
                />
                <FruitCounter
                    emoji="🍏"
                    title=" Appels"
                    counter={counterAppels}
                    setCounter={setCounterAppels}
                />
                <FruitCounter
                    emoji="🥝"
                    title="Kiwi's"
                    counter={counterKiwis}
                    setCounter={setCounterKiwis}
                />

                <button type="button" onClick={resetCounter} className="resetButton">
                    Reset
                </button>
            </section>

            <Form/>

        </>
    );
}

export default App;
