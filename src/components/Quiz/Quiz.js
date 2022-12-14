import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from '../QuizPage/QuizPage';
import './Quiz.css'




const Quiz = () => {
    const quizQuestion = useLoaderData();
    const { name } = quizQuestion.data;
    // console.log(quizQuestion)

    const Questions = quizQuestion.data.questions;
    return (
        <div>
            <h3 className='quiz-style'>Quiz of {name}</h3>

            <div className="quiz-question">
                {

                    Questions.map((query) =>
                        <QuizPage
                            key={query.id}
                            query={query}

                        ></QuizPage>
                    )
                }

            </div>

        </div>
    );
};

export default Quiz;