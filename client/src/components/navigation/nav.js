import React from 'react';

import NavTab from './nav-tab/nav-tab';
import Button from '../button/button';

import Logo from '../../images/logo.png';
import './nav.css';

export default function Nav() {
    return (
        <div className='NavBar'>
            {/* Logo */}
            <div className='NavBar-logo'>
                <a href='/'><img src={ Logo } /></a>
            </div>
            {/* Hide Tabs and Registration function for first release */}
            {/* Tabs */}
            {/* <NavTab /> */}
            {/* Menu */}
            {/* <Button text={'登陆 / 注册'} type={'create'}/> */}
        </div>
    )
}