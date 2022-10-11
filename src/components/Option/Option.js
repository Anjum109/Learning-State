import React from 'react';
import './Option.css'

const Option = ({ option, handleClick }) => {
    console.log(option)
    // const { id } = option;



    return (
        <div className='option-box'>
            <div className='options'>
                <input onClick={() => handleClick(option)} type="radio" value="id" name="option" />{option}
            </div>
        </div>
    );
};

export default Option;