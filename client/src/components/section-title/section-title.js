import React from 'react';

import IconSet from '../icons/iconset';

export default function SectionTitle(props) {
    return (
        <h3 className='Header-title'>
            <IconSet type='forest'/>
            {props.title}
        </h3>
    )
}
