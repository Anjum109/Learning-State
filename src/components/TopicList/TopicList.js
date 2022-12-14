import React from 'react';
import { Link } from 'react-router-dom';
import './TopicList.css'


const TopicList = ({ topicList }) => {
    const { name, logo, id, total } = topicList;
    return (
        <div className='topic-list'>
            <div className='logo-image'>
                <img src={logo} alt="" />
            </div>

            <h4 className='topic-name'>{name}</h4>
            <p className='topic-name'>Total Question: {total}</p>
            <div className='btn-btn'>
                <button className='practice-btn'><Link to={`/quiz/${id}`}>Start Practice</Link></button>

            </div>
        </div>
    );
};

export default TopicList;