import React from 'react';
import '../index.css';

import MugSetUp from './home_components/MugSetUp';

const Reglages = () => {

    return (
        <div id="myHomePopUp">
            <h1>Programmer ma tasse</h1>
            <div id="prog">
                <div align="center">
                    <MugSetUp />
                </div>
            </div>
        </div>
    );

}


export default Reglages;