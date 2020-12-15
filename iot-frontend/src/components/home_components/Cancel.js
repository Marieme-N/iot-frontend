import React from 'react';
import '../../index.css';
import moment from 'moment'

const Cancel = ({ setValidate, currentTemperature, setCurrentTemperature, setDesiredTemperature, setHour, setKeepWarmTime }) => {

    const onCancel = () => {
        setValidate(false);
        setCurrentTemperature(currentTemperature);
        setDesiredTemperature(currentTemperature);
        setHour(moment());
        setKeepWarmTime(0);
    }

    return (
        <div>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default Cancel;