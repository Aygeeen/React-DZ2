import React from 'react';

function Button({ onClick }) {
    return (
        <button onClick={onClick} className='button'>Ок</button>
    );
}

export default Button;