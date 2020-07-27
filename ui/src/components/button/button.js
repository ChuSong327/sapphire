import React, { useState, useEffect } from 'react';

import './button.css';

export default function Button(props) {
    const [text, setText] = useState();

    useEffect(() => {
        setText(props.text);
    }, []);

    return (
        <>
            <a href={`${props.url}`}><button type='button' className='Button'>{text}</button></a>
        </>
    )
}