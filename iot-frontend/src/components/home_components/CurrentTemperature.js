import React from 'react';
import '../../index.css';

const CurrentTemperature = ({current_temperature}) => {
    return (
        <div>
            <label>Température actuelle</label>
            <br></br>
            <span id="currentTemparature">{current_temperature}</span>
        </div>
    );
}

export default CurrentTemperature;