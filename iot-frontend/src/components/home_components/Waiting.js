import React from 'react';
import '../../index.css';
import moment from 'moment'

const Waiting = ({ remainingTime, setRemainingTime, keepWarmTime, hour }) => {

    React.useEffect(() => {
        if (remainingTime !== 0) {
            const currentMoment = moment();
            const currentMomentInMinutes = moment(currentMoment).hour() * 60 + moment(currentMoment).minute();
            const hourInMinutes = moment(hour).hour() * 60 + moment(hour).minute();
            setRemainingTime(hourInMinutes - currentMomentInMinutes < 0 ? hourInMinutes - currentMomentInMinutes + 60 : hourInMinutes - currentMomentInMinutes);
        }
    }, [])

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (remainingTime !== 0) {
                const currentMoment = moment();
                const currentMomentInMinutes = moment(currentMoment).hour() * 60 + moment(currentMoment).minute();
                const hourInMinutes = moment(hour).hour() * 60 + moment(hour).minute();
                const remT = hourInMinutes - currentMomentInMinutes;
                if (remT >= 0)
                    setRemainingTime(hourInMinutes - currentMomentInMinutes);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [hour, remainingTime, setRemainingTime]);

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