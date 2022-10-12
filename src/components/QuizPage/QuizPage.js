import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Option from '../Option/Option';
import './QuizPage.css'


const QuizPage = ({ query }) => {
    const { question, options, correctAnswer } = query;
    // console.log(question, id)

    const handleClick = (answer) => {
        if (answer === correctAnswer) {
            toast('Right Answer')
        }
        else {
            toast('Wrong answer')
        }
    }

    const handleEye = () => {
        toast(correctAnswer);
    }

    return (
        <div className='questions'>
            <div className='question-container'>
                <h3>Quiz:{question.slice(3, -4)}</h3>
                <div className='fontSet'><FontAwesomeIcon onClick={handleEye} icon={faEye}><ToastContainer width='500px' />
                </FontAwesomeIcon></div>
            </div>
            <div className="option">
                {query.options.map((option, idx, id) =>
                    <Option
                        key={idx}
                        option={option}
                        id={id}
                        handleClick={handleClick}
                    ></Option>
                )}
            </div>
        </div>
    );
};

export default QuizPage;