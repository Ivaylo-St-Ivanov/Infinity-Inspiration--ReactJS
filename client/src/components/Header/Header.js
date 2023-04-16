import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import { Navigation } from './Navigation/Navigation';
import styles from './Header.module.css';

export const Header = () => {
    const { userEmail, isAuthenticated } = useContext(UserContext);

    const [isClicked, setIsClicked] = useState(false);

    const onNavBarClick = () => {
        setIsClicked(value => !value);
    };

    return (
        <header className={styles['header']}>
            <div className={styles['main-header']}>
                <h2 className="logo">
                    <i className="fas fa-infinity"></i>
                    <Link to="/">Infinity Inspiration</Link>
                </h2>

                <Navigation />

                <span className={styles['nav-bar']} onClick={onNavBarClick}>
                    <i className='fas fa-bars'></i>
                </span>

                {isAuthenticated && (
                    <div className={styles['user']}>
                        <span>{userEmail}</span>
                        <span><Link to='/logout'>Logout</Link></span>
                    </div>
                )}

                {!isAuthenticated && (
                    <Link to='/login' className="btn btn-nav">sign up / login</Link>
                )}
            </div>

            {/* <!---------- Hidden Nav -----------> */}

            {isClicked && (
                <div className={styles['hidden-nav']}>
                    
                    <Navigation />
                </div>
            )}
        </header>
    );
};