import React, {useState} from "react";
import './Form.css';
export function Form(props) {

    // functions Submitform
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const [frequency, setFrequency] = useState('dayly');
    const [moment, setMoment] = useState('daytime');
    const [remarks, setRemarks] = useState('');
    const [terms, setTerms] = useState(false);

    function handleSubmit(e) {
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
                        onChange={(e) => setFrequency(e.target.value)}
                    >
                        <option value="dayly">Dagelijks</option>
                        <option value="weekly">Wekelijks</option>
                        <option value="monthly">Maandelijks</option>
                    </select>
                </label>
                <label htmlFor="moment-day">
                    <input
                        type="radio"
                        value={'daytime'}
                        checked={moment === 'daytime'}
                        onChange={(e) => setMoment(e.target.value)}
                    />Overdag
                </label>
                <label htmlFor="moment-evening">
                    <input
                        type="radio"
                        value={'evening'}
                        checked={moment === 'evening'}
                        onChange={(e) => setMoment(e.target.value)}
                    />'s Avonds
                </label>
                <label htmlFor="remarks" className="remarks">
                    Opmerking
                    <textarea
                        name="remarks"
                        id="comment"
                        cols="30"
                        rows="10"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}

                    />
                </label>
                <label htmlFor="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={terms}
                        onChange={(e) => setTerms(!terms)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button
                    type="sendButton"
                    disabled={!terms}
                    onClick={handleSubmit}
                >Verzenden
                </button>
            </form>
        </div>


    );
}