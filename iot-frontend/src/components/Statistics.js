import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'startDate',
    text: 'Start Date',
},
{
    dataField: 'duration',
    text: 'Session Duration'
},
{
    dataField: 'goalTemperature',
    text: 'Chosen Temperature'
}];

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://iot-notember.ew.r.appspot.com/all-sessions')
            .then(res => {
                setData(res.data);
            });
    }, []);

    function getArrayMax(array) {
        return Math.max.apply(null, array);
    }

    function getArrayMin(array) {
        return Math.min.apply(null, array);
    }

    function mode(array) {
        if (array.length === 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }

    const allTemperature = data.map((item) => { return item.goalTemperature });
    const favorTemperature = mode(allTemperature);
    const higherTemperature = getArrayMax(allTemperature);
    const lowerTemperature = getArrayMin(allTemperature);

    return (
        <div>
            <h1>Statistics</h1>
            <div class="split">
                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={data}
                    columns={columns}/>
            </div>
            <div class="split2">
                <div class="pref">
                    <h1>Préférences observées</h1>
                    <label>Température préférée: {favorTemperature}</label>
                    <br></br>
                    <label>Plus haute température désirée: {higherTemperature}</label>
                    <br></br>
                    <label>Plus basse température désirée: {lowerTemperature}</label>
                </div>
            </div>
        </div >
    )
}



export default Statistics;