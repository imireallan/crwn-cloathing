import React, { useState } from 'react';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';

import jackets from '../../images/jackets.jpg';
import mens from '../../images/mens.jpg';
import shoes from '../../images/shoes.jpg';
import womens from '../../images/womens2.jpg';
import hats from '../../images/hats.jpg';

console.log(shoes);

export const Directory = () => {
    // eslint-disable-next-line no-unused-vars
    const [sections, setSections] = useState([
        {
            title: 'hats',
            imageUrl: hats,
            id: 1,
        },
        {
            title: 'jackets',
            imageUrl: jackets,
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: shoes,
            id: 3,
        },
        {
            title: 'womens',
            imageUrl: womens,
            size: 'large',
            id: 4,
        },
        {
            title: 'mens',
            imageUrl: mens,
            size: 'large',
            id: 5,
        },
    ]);
    return (
        <div className="directory-menu">
            {sections.map(({ id, title, imageUrl, size }) => {
                return (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                );
            })}
        </div>
    );
};
