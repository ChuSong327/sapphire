import React from 'react';

import Tag from '../tag/tag';
import Button from '../button/button';
import IconSet from '../icons/iconset';

import './header.css';

export default function Header(props) {
    const { title, tags, handleViewChange } = props;
    return (
        <div className='Header-container'>
            <h3 className='Header-title'>
                <IconSet type='forest'/>
                {title}
            </h3>
            <div className='Header-content'>
                <Button text={'一吐为快'} url='/qqh/speakitout'/>
                <div className='Header-tags'>
                    {tags.map((tag, index) => {
                        return (
                            <Tag text={tag.text} count={tag.count} url={tag.url} key={index} />
                        )
                    })}
                </div>
                <div className='Header-tools'>
                    <IconSet type='list' handleViewChange={handleViewChange}/>
                    <IconSet type='grid' handleViewChange={handleViewChange}/>
                    <IconSet type='sort' handleViewChange={handleViewChange}/>
                </div>
            </div>
        </div>
    )
}