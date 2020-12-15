import React from 'react';
import '../../index.css';

const Validate = ({ setValidate }) => {

    const onValidate = () => {
        setValidate(true);
    }

    return (
        <div>
            <button onClick={onValidate}>Valider</button>
        </div>
    )
}

export default Validate;