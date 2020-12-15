import React from 'react';
import '../../index.css';

const TimeKeepWarm = ({setKeepWarmTime}) => {
    const onSelectTime = (e) => {
        setKeepWarmTime(parseInt(e.target.value, 10));
    }

    return (
        <div>
            <label>Pendant:</label>
            <br></br>
            <label class="mySelect">   5 mins  <input type="radio" onChange={onSelectTime} name="time" value="5"></input><span class="choice"></span></label>
            <label class="mySelect">  15 mins  <input type="radio" onChange={onSelectTime} name="time" value="15"></input><span class="choice"></span></label>
            <label class="mySelect">  20 mins  <input type="radio" onChange={onSelectTime} name="time" value="20"></input><span class="choice"></span></label>
        </div>
    );
}

export default TimeKeepWarm;