import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicList from '../TopicList/TopicList';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div className='topics'>
            {
                topics.data.map(topicList => <TopicList
                    key={topicList.id}
                    topicList={topicList}
                ></TopicList>)
            }
        </div>
    );
};

export default Home;