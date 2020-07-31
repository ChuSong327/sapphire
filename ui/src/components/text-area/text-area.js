import React from 'react';

import './text-area.css';

export default function TextArea(props) {
    switch(props.name) {
        case 'content': 
            return (
                <textarea className={`TextArea ${props.type}`} name="content" id="" cols="30" rows="10"></textarea>
            );
        case 'name': 
            return (
                <textarea className={`TextArea ${props.type}`} name="content" id="" cols="30" rows="10"></textarea>
            );
        default:
            return null;
    }
}