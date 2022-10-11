import React from 'react';
import { Link } from 'react-router-dom';
import './TopicList.css'


const TopicList = ({ topicList }) => {
    const { name, logo, id } = topicList;
    return (
        <div className='topic-list'>
            <div className='logo-image'>
                <img src={logo} alt="" />
            </div>

            <h4 className='topic-name'>{name}</h4>
            <button className='practice-btn'><Link to={`/quiz/${id}`}>Start Practice</Link></button>

        </div>
    );
};

export default TopicList;