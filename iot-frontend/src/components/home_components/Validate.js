import React from 'react';
import '../../index.css';

const Validate = ({ setValidate }) => {
    function onValidate() {
        setValidate();
    }

    return (
        <div>
            <button type='button' onClick={onValidate}>Valider</button>
        </div>
    )
}

export default Validate;