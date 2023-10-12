import React from 'react';

function Name({value, onChange}) {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder="name" className="input-name"/>
        </div>
    );
}

export default Name;