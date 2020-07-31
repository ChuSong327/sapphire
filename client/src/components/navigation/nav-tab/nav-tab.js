import React, { useState, useEffect } from 'react';

import './nav-tab.css';

export default function NavTab() {
    const [path, setPath] = useState('qqh');

    useEffect(() => {
        if (getPath()) {
            setPath(getPath());
        }
        return () => {};
    }, []);

    const getPath = () => {
        return window.location.pathname.split('/').filter(el => el)[0];
    }

    const isSelected = (target) => {
        return path === target ? 'selected' : '';
    }

    return (
        <div className='NavTab'>
            <a href='/qqh'><div className={`NavTab-tab ${isSelected('qqh')}`}>悄悄话</div></a>
            <a href='/bbs'><div className={`NavTab-tab ${isSelected('bbs')}`}>论坛</div></a>
        </div>
    )
}