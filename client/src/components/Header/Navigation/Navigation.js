import { Link } from 'react-router-dom';

import styles from '../Header.module.css';

export const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <ul className={styles['nav-list']} role="list">
                <li className={styles['nav-item']}>
                    <Link to="/" reloadDocument>About us</Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link to="/message">Incredible Persons</Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link to="/message">Big Questions</Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link to="/catalog">Amazing Facts</Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link to="/message">Stories</Link>
                </li>
            </ul>
        </nav>
    );
};