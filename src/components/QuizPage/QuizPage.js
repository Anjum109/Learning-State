import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './QuizPage.css'


const QuizPage = ({ query }) => {
    const { question, options, correctAnswer } = query;
    // console.log(question, id)

    const handleClick = (answer) => {
        if (answer === correctAnswer) {
            alert('Right Answer')
        }
        else {
            alert('wrong answer')
        }
    }

    return (
        <div className='questions'>
            <div className='question-container'>
                <h3>Quiz:{question}</h3>
                <div className='fontSet'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></div>
            </div>
            <div className="option">
                {query.options.map((option, idx) =>
                    <Option
                        key={idx}
                        option={option}
                        handleClick={handleClick}
                    ></Option>
                )}
            </div>
        </div>
    );
};

export default QuizPage;