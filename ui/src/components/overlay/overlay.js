import React from 'react';

import './overlay.css';

export default function Overlay(props) {
    return (
        <div id='overlay' className='Overlay' onClick={props.handleClick}>
            {props.control}
        </div>
    )
}