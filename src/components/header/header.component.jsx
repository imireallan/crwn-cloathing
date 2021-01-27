import { Link } from 'react-router-dom';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = () => {
    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <nav className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option">CONTACT</Link>
            </nav>
        </header>
    );
};
