import React from 'react';
import '../../index.css';
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Scheduling = ({ hour, setHour }) => {
    const onHourUpClick = () => {
        const updateHour = moment(hour).add(1, "hours");
        setHour(updateHour);
    }

    const onHourDownClick = () => {
        const updateHour = moment(hour).subtract(1, "hours");
        setHour(updateHour);
    }

    const onMinutesUpClick = () => {
        const updateHour = moment(hour).add(1, "minutes");
        setHour(updateHour);
    }

    const onMinutesDownClick = () => {
        const updateHour = moment(hour).subtract(1, "minutes");
        setHour(updateHour);
    }

    return (
        <div>
            <span id="test"><label>Préparer ma tasse pour:
                <span id="schedule">
                    <label id="hourUp" className="chevron"><input onClick={onHourUpClick} type="button" name="addTime"></input><span className="changeTime"><FontAwesomeIcon icon={faChevronUp} /></span></label>
                    <label id="hourDown" className="chevron"><input onClick={onHourDownClick} type="button" name="addTime"></input><span className="changeTime"><FontAwesomeIcon icon={faChevronDown} /></span></label>
                    <label id="minuteUp" className="chevron"><input onClick={onMinutesUpClick} type="button" name="addTime"></input><span className="changeTime"><FontAwesomeIcon icon={faChevronUp} /></span></label>
                    <label id="minuteDown" className="chevron"><input onClick={onMinutesDownClick} type="button" name="addTime"></input><span className="changeTime"><FontAwesomeIcon icon={faChevronDown} /></span></label>
                    {moment(hour).format("HH:mm")}
                </span>
            </label>
            </span>
        </div>
    );
}

export default Scheduling;