import React, {useState} from "react";
import './Form.css';
export function Form(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const [frequency, toggleFrequency] = useState('dayly');
    const [moment, toggleMoment] = useState('daytime');
    const [remarks, setRemarks] = useState('');
    const [terms, toggleTerms] = useState(false);



    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            {firstName},
            {lastName},
            {age},
            {zipCode},
            {frequency},
            {moment},
            {remarks},
            {terms}
        )
        ;
    }

    return (
        <div className="orderform">
            <form>
                <h3>Bestelformulier:</h3>
                <label htmlFor="firstName">
                    Voornaam
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)
                        }
                    />
                </label>
                <label htmlFor="lastName">
                    Achternaam
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="age">
                    Leeftijd
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <label htmlFor="zip-code">
                    Postcode
                    <input
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
                <label htmlFor="frequency">
                    Bezorgfrequentie
                    <select
                        name="frequency"
                        id="frequency"
                        value={frequency}
                        onChange={(e) => toggleFrequency(e.target.value)}
                    >
                        <option value="dayly">Dagelijks</option>
                        <option value="weekly">Wekelijks</option>
                        <option value="monthly">Maandelijks</option>
                    </select>
                </label>
                <label htmlFor="moment-day">
                    <input
                        type="radio"
                        id="moment-day"
                        value={'daytime'}
                        checked={moment === 'daytime'}
                        onChange={(e) => toggleMoment(e.target.value)}
                    />Overdag
                </label>
                <label htmlFor="moment-evening">
                    <input
                        type="radio"
                        id="moment-evening"
                        value={'evening'}
                        checked={moment === 'evening'}
                        onChange={(e) => toggleMoment(e.target.value)}
                    />'s Avonds
                </label>
                <label htmlFor="remarks" className="remarks">
                    Opmerking
                    <textarea
                        name="remarks"
                        id="comment"
                        cols="40"
                        rows="6"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}

                    />
                </label>
                <label htmlFor="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms-field"
                        value={terms}
                        checked={terms}
                        onChange={(e) => toggleTerms(e.target.checked)}
                    />
                    Ik ga akkoord met de voorwaarden

                </label>
                <button
                    type="sendButton"
                    disabled={!terms}
                    onClick={handleSubmit}
                >Verzend
                </button>
            </form>
        </div>


    );
}