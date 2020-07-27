import React from 'react';

import './tag.css';

export default function Tag(props) {
    return (
        <div className='Tag-wrapper'>
            <a href={`${props.url}`}>
                <span className='Tag-text'>{props.text}<em>{props.count}</em></span>
            </a>
        </div>
    )
}