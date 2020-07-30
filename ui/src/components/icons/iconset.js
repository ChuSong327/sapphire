import React from 'react';

import './iconset.css';
import Heart from '../../images/heart.svg';
import Sort from '../../images/sort.svg';
import Grid from '../../images/grid.svg';
import List from '../../images/list.svg';
import Forest from '../../images/forest.svg';

export default function IconSet(props) {
    const { type, handleViewChange } = props;
    switch (type) {
        case 'forest': 
            return (
                <img id='forest' src={Forest}/>
            );
        case 'list': 
            return (
                <span id='list' className='Iconset-tool list' onClick={handleViewChange}>
                    <img src={List}/>
                </span>
            );
        case 'grid':
            return (
                <span id='grid' className='Iconset-tool grid' onClick={handleViewChange}>
                    <img src={Grid}/>
                </span>
            );
        case 'sort': 
            return (
                <span id='sort' className='Iconset-tool sort'>
                    <img src={Sort}/>
                </span>
            );
        case 'heart': 
        return (
            <img id='heart' src={Heart} onClick={props.onClick}/>
        );
        default:
            return null;
    }
}