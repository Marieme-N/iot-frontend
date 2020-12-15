import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'startDate',
    text: 'Start Date'
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
            .get('https://cors-anywhere.herokuapp.com/https://iot-notember.ew.r.appspot.com/all-sessions')
            .then(res => {
                setData(res.data);
            });
    }, []);

    return (
        <div>
            <h1>Statistics</h1>
            <div class="split">
                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={data}
                    columns={columns} />
            </div>
            <div class="split2">
                <div class="pref">
                    <h1>Préférences observées</h1>
                    <label>Température préférée: </label>
                    <br></br>
                    <label>Plus haute température désirée: </label>
                    <br></br>
                    <label>Plus basse température désirée: </label>
                    <br></br>
                    <label>Durée moyenne de consommation: </label>
                </div>
            </div>
        </div >
    )
}

export default Statistics;