import React from 'react';

import Tag from '../tag/tag';
import Button from '../button/button';
import IconSet from '../icons/iconset';
import SectionTitle from '../section-title/section-title';

import './header.css';

export default function Header(props) {
    const { title, tags, handleViewChange, handleClick } = props;
    return (
        <div className='Header-container'>
            <SectionTitle title={title}/>
            <div className='Header-content'>
                <Button text={'一吐为快'} type={'create'} handleClick={handleClick}/>
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