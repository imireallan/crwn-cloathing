import { withRouter, useHistory } from 'react-router-dom';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
    const history = useHistory();
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.path}${linkUrl}`)}
        >
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

export default withRouter(MenuItem);
