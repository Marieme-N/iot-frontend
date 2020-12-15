import React from 'react';
import '../../index.css';

const AddKeepWarmTime = ({ remainingTime, keepWarmTime, setKeepWarmTime }) => {
    const [selected, setSelected] = React.useState();

    const onSelectTime = (e) => {
        setSelected(parseInt(e.target.value, 10));
    }

    const onClickOk = () => {
        setKeepWarmTime(parseInt(keepWarmTime, 10) + selected);
    }

    if (remainingTime === 0) {
        return (
            <div>
                <label>Ajouter du temps: </label>
                <label className="mySelect">5 mins<input type="radio" onChange={onSelectTime} name="time" value="5"></input><span className="choice"></span></label>
                <label className="mySelect">15 mins<input type="radio" onChange={onSelectTime} name="time" value="15"></input><span className="choice"></span></label>
                <label className="mySelect">20 mins<input type="radio" onChange={onSelectTime} name="time" value="20"></input><span className="choice"></span></label>
                   <button type="button" onClick={onClickOk}>Ok</button>
            </div>
        )
    } else return null;

}

export default AddKeepWarmTime;