import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AnimatedHeader from '../AnimatedHeader/AnimatedHeader';

import TopicList from '../TopicList/TopicList';
import './Home.css'
import img from './learn.jpg'

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics)
    return (

        <div>
            <div>
                <AnimatedHeader></AnimatedHeader>
            </div>
            <div className='header-item-container'>

                <img src={img} alt="" />

                <p>
                    Learning state is an online learning platform where you can learn about programming by playing different programming language quizzes.
                </p>

            </div>
            <h2 className='quizzes-headline'> Programming Quizzes</h2>
            <div className='topics'>

                {
                    topics.data.map(topicList => <TopicList
                        key={topicList.id}
                        topicList={topicList}
                    ></TopicList>)
                }
            </div>
        </div>
    );
};

export default Home;