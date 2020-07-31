import React from 'react';

import IconSet from '../icons/iconset';

import './text-card.css';

export default function TextCard(props) {
    const { card, view, handleCardClick, handleLikeClick, id } = props;
    const onCardClick = (evt) => {
        if (view !== 'detail') {
            handleCardClick(evt, id);
        }
    };
    const onIconClick = (evt) => {
        handleLikeClick(evt, id);
    }
    return (
        <div className={`TextCard-container ${view}`} onClick={onCardClick}>
            <div className='TextCard-date'>{card.date}</div>
            <div className={`TextCard-content ${view}`}>{card.text}</div>
            <div className='TextCard-footer'>
                <IconSet type='heart' clssName='TextCard-footer-icon' onClick={onIconClick}/>
                <span className='TextCard-footer-likes'>{card.likes}</span>
            </div>
        </div>
    )
}