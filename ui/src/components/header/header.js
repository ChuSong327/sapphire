import React from 'react';

import Tag from '../tag/tag';
import Button from '../button/button';
import './header.css';

export default function Header(props) {
    return (
        <div className='Header-container'>
            <h3 className='Header-title'>{props.title}</h3>
            <div className='Header-content'>
                <Button text={'一吐为快'} url='/qqh/speakitout'/>
                <div className='Header-tags'>
                    {props.tags.map((tag, index) => {
                        return (
                            <Tag text={tag.text} count={tag.count} url={tag.url} key={index} />
                        )
                    })}
                </div>
                <div className='Header-tools'>tools</div>
            </div>
        </div>
    )
}