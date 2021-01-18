import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => console.log('clicked')}
        >
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
