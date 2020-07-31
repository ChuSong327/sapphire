import React from 'react';

import './iconset.css';
import Heart from './svg/heart.svg';
import Sort from './svg/sort.svg';
import Grid from './svg/grid.svg';
import List from './svg/list.svg';
import Forest from './svg/forest.svg';

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