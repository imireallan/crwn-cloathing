import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    );
};
