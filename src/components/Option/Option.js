import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Option.css'

const Option = ({ option, handleClick, id }) => {
    console.log(option)
    // const { id } = option;



    return (
        <div className='option-box'>
            <div className='options'>
                <label>
                    <input onClick={() => handleClick(option)} type="radio" value="" name={id} />{option}<ToastContainer position='top-center' />
                </label>
            </div>
        </div>
    );
};

export default Option;