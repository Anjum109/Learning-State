import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    const { id } = option;
    return (
        <div className='option-box'>
            <ul className='options'>
                <li>{option}</li>
            </ul>
        </div>
    );
};

export default Option;