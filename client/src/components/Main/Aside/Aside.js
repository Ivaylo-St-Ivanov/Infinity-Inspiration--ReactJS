import styles from './Aside.module.css';

export const Aside = () => {
    return (
        <aside className={styles['aside']}>
            <ul role="list">
                <li>
                    <a href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </aside>
    );
};