import React from 'react';

import TextCard from '../../components/card/text-card';
import './overlay.css';

export default function Overlay(props) {
    const { card, handleLikeClick, id } = props;
    return (
        <div id='overlay' className='Overlay'>
            <TextCard 
                card={card}
                id={id}
                view='detail'
                handleLikeClick={handleLikeClick}
            />
        </div>
    )
}