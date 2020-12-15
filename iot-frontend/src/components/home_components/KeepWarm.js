import React from 'react';
import '../../index.css';
import TimeKeepWarm from './TimeKeepWarm';


const KeepWarm = ({desired_temperature, keepWarmTime, setKeepWarmTime}) => {
    const [keepWarm, setKeepWarm] = React.useState(false);

    const handleCheck = e => {
        setKeepWarm(e.target.checked)
    }

    return (
        <div>
            <label className="switch">Maintenir au chaud: <input onInput={handleCheck} type="checkbox"></input><span className="slider"></span></label>
            {keepWarm ? <TimeKeepWarm desired_temperature={desired_temperature} keepWarmTime={keepWarmTime} setKeepWarmTime={setKeepWarmTime}/>: null}
        </div>
        
    );
}

export default KeepWarm;