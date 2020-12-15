import React from 'react';
import '../../index.css';
import moment from 'moment'

const Waiting = ({ remainingTime, setRemainingTime, keepWarmTime, hour }) => {
    const [currentMoment, setCurrentMoment] = React.useState(moment());

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (remainingTime !== 0) {
                setCurrentMoment(moment());
                const currentMomentInMinutes = moment(currentMoment).hour() * 60 + moment(currentMoment).minute();
                const hourInMinutes = moment(hour).hour() * 60 + moment(hour).minute();
                const remT = hourInMinutes - currentMomentInMinutes;
                if (remT >= 0)
                    setRemainingTime(hourInMinutes - currentMomentInMinutes);
            }
        }, 60000);

        return () => clearInterval(interval);
    }, [currentMoment, hour, remainingTime, setRemainingTime]);

    if (remainingTime === 0) {
        return (<div id="maintain">
            <label>Maintien au chaud pendant encore: </label>
            <br></br>
            <br></br>
            <span>{keepWarmTime} minutes</span>
        </div>)
    } else {
        return (
            <div id="wait">
                <label>Tasse prête dans: </label>
                <br></br>
                <br></br>
                <span>{remainingTime} minutes</span>
            </div>
        )
    }
}

export default Waiting;