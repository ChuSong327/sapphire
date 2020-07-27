import React, { useState } from 'react';

import Header from '../../components/header/header';

export default function ShuDong() {
    const [tags, setTags] = useState([
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'}
    ]);
    return (
       <div className='container'>
        {/* header row */}
            <Header title={'树洞悄悄话'} tags={tags}/>
        {/* card row */}
       </div>
    )
}