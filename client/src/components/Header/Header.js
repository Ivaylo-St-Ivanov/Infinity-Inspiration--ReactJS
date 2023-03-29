import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import styles from './Header.module.css';

export const Header = () => {
    const { userEmail, isAuthenticated } = useContext(UserContext);

    return (
        <header className={styles['header']}>
            <div className={styles['main-header']}>
                <h2 className="logo">
                    <i className="fas fa-infinity"></i>
                    <Link to="/">Infinity Inspiration</Link>
                </h2>

                <nav className={styles['navigation']}>
                    <ul className={styles['nav-list']} role="list">
                        <li className={styles['nav-item']}>
                            <Link to="/#about">About us</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#persons">Incredible Persons</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#question">Big Questions</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link to="/catalog">Amazing Facts</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#stories">Stories</a>
                        </li>
                    </ul>
                </nav>

                <span className={styles['nav-bar']}>
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

            <div className={styles['hidden-nav']}>
                <nav className={styles['navigation']}>
                    <ul className={styles['nav-list']} role="list">
                        <li className={styles['nav-item']}>
                            <a href="#about">About us</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#persons">Incredible Persons</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#question">Big Questions</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#facts">Amazing Facts</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="#stories">Stories</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};