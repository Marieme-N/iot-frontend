import React from 'react';
import '../../index.css';

const SetTemperature = ({ temperature, setDesiredTemperature }) => {

    const handleInputChange = e => {
        setDesiredTemperature(e.currentTarget.value);
    }

    return (
        <div>
            <label>Température désirée</label>
            <br></br>
            <span>
                30<input onChange={handleInputChange} id="myRange" type="range" min="30" value={temperature} max="60" step="1"></input>60
                        <br></br>
                <span id="myTemperature">{temperature}</span>
            </span>
        </div>
    );
}

export default SetTemperature;