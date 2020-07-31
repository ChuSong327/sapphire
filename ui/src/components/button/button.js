import React, { useState, useEffect } from 'react';

import './button.css';

export default function Button(props) {
    const { text, type, handleClick} = props;

    switch (type) {
        case 'create': 
            return (
                <>
                    <button type='button' className={`Button ${type}`} onClick={handleClick}>{text}</button>
                </>
            );
        case 'cancel': 
            return (
                <button type='button' name={type} className={`Button ${type}`} onClick={(evt) => handleClick(evt)}>{text}</button>
            );
        case 'submit': 
            return (
                <button type='button' name={type} className={`Button ${type}`} onClick={(evt) => handleClick(evt)}>{text}</button>
            );
        default: 
                return (
                    <>
                        <button type='button' className='Button' onClick={handleClick}>{text}</button>
                    </>
                )

    }
}