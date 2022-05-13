import React, {useState} from 'react';
import "./App.css";
import FruitCounter from './components/FruitCounter';
import {Form} from './components/Form';
import screenshotLogo from './assets/screenshot-logo.png';



function App() {
    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);

    function resetCounter() {
        setCounterAardbeien(0);
        setCounterBananen(0);
        setCounterKiwis(0);
        setCounterAppels(0);
    }



    return (
        <>
            <img src={screenshotLogo} width="750" height="150" alt="logo-image"/>

            <div className="fruitform">
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
            </div>




            <Form/>

        </>
    );
}

export default App;
