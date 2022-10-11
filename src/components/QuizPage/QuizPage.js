import React from 'react';
import Option from '../Option/Option';
import './QuizPage.css'


const QuizPage = ({ query }) => {
    const { id, question, options } = query;
    console.log(question, id)
    return (
        <div className='questions'>
            <h3>Quiz:{question}</h3>
            <div className="option">
                {options.map((option) =>
                    <Option
                        key={option.id}
                        option={option}
                    ></Option>
                )}
            </div>
        </div>
    );
};

export default QuizPage;