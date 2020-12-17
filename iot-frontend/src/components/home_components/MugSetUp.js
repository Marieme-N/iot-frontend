import React, { useEffect } from 'react';
import '../../index.css';
import moment from 'moment';
import axios from 'axios';

import CurrentTemperature from './CurrentTemperature';
import KeepWarm from './KeepWarm';
import Scheduling from './Scheduling';
import SetTemperature from './SetTemperature';
import Validate from './Validate';
import Waiting from './Waiting';
import AddKeepWarmTime from './AddKeepWarmTime';
import Cancel from './Cancel';

const MugSetUp = () => {
    const [currentTemperature, setCurrentTemperature] = React.useState(0);
    const [desiredTemperature, setDesiredTemperature] = React.useState(50);
    const [hour, setHour] = React.useState(moment().add(5, "minutes"));
    const [keepWarmTime, setKeepWarmTime] = React.useState(0);
    const [validate, setValidate] = React.useState(false);
    const [remainingTime, setRemainingTime] = React.useState();

    function getStatus() {
        axios
            .get('https://iot-notember.ew.r.appspot.com/get-status')
            .then(res => {
                console.log(res.data);
                setCurrentTemperature(res.data.currentTemperature);
                setValidate(['waiting', 'adjusting', 'ready'].find(elt => elt === res.data.planStatus))
            })
            .catch(e => console.log("error: cannot get status"));
    }

    function sendPlan() {
        axios
            .put('https://iot-notember.ew.r.appspot.com/stop-plan')
            .catch(e => console.log("error: cannot stop plan"));
        ;
        const body = {
                startHour: hour.format("DD/MM/YYYY HH:mm:ss"),
                duration: keepWarmTime,
                goalTemperature: desiredTemperature,
            }
        console.log(body);
        axios
            .post('https://iot-notember.ew.r.appspot.com/plan-warmup', body)
            .catch(e => console.log("error: cannot start warmup plan"));
    }

    function cancelPlan() {
        axios.put('https://iot-notember.ew.r.appspot.com/stop-plan').catch();
    }

    useEffect(() => {
        getStatus();
        const interval = setInterval(() => {
            getStatus();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (!validate) {
        return (
            <form id="setupTemperature">
                <CurrentTemperature current_temperature={currentTemperature} setCurrentTemperature={setCurrentTemperature} />
                <SetTemperature temperature={desiredTemperature} setDesiredTemperature={setDesiredTemperature} />
                <Scheduling hour={hour} setHour={setHour} />
                <KeepWarm keepWarmTime={keepWarmTime} setKeepWarmTime={setKeepWarmTime} />
                <Validate
                    currentTemperature={currentTemperature}
                    desired_temperature={desiredTemperature}
                    hour={hour}
                    setHour={setHour}
                    keepWarmTime={keepWarmTime}
                    validate={validate}
                    setValidate={sendPlan}
                />
            </form>
        )
    } else {
        return (
            <form id="waiting">
                <Waiting
                    remainingTime={remainingTime}
                    setRemainingTime={setRemainingTime}
                    currentTemperature={currentTemperature}
                    desired_temperature={desiredTemperature}
                    hour={hour}
                    setHour={setHour}
                    keepWarmTime={keepWarmTime}
                    validate={validate}
                />
                <label>Température actuelle: </label>
                <span id="myTemperature">{currentTemperature}</span>
                <br></br>
                <label>Température visée: </label>
                <span id="myTemperature">{desiredTemperature}</span>
                <br></br>
                <AddKeepWarmTime
                    remainingTime={remainingTime}
                    keepWarmTime={keepWarmTime}
                    setKeepWarmTime={setKeepWarmTime}
                />
                <Cancel
                    setValidate={cancelPlan}
                    currentTemperature={currentTemperature}
                    setCurrentTemperature={setCurrentTemperature}
                    setDesiredTemperature={setDesiredTemperature}
                    setHour={setHour}
                    setKeepWarmTime={setKeepWarmTime}
                />
            </form>
        )
    }

}

export default MugSetUp;