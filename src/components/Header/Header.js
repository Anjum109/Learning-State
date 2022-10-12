import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import image from './online-learning.png'

const Header = () => {
    return (

        <nav className='header'>
            <div className='header-name'>
                <h2>Learning <span>State</span></h2>
            </div>
            <div className='topic'>
                <NavLink to={'/'}>Topic</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
            </div>
        </nav >

    );
};

export default Header;