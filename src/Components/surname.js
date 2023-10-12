import React from 'react';

function Surname({value, onChange}) {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder="surname" className="surname-input"/>
        </div>
    );
}

export default Surname;