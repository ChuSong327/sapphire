import React from 'react';

import TextCard from '../../components/card/text-card';
import './overlay.css';

export default function Overlay(props) {
    const { card, handleIconClick, id } = props;
    return (
        <div id='overlay' className='Overlay'>
            <TextCard 
                card={card}
                id={id}
                view='detail'
                handleIconClick={handleIconClick}
            />
        </div>
    )
}