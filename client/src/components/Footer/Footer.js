import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['upper-part']}>
                <div className={styles['title']}>
                    <h4>Infinity Inspiration</h4>
                    <p>We bring people together to create a better world.</p>
                </div>

                <div className={styles['info']}>
                    <span>Information</span>
                    <ul className={styles['list']} role="list">
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Visit Our Blog</a>
                        </li>
                        <li>
                            <a href="">Accessibility</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className={styles['icons']}>
                    <span>Connect</span>
                    <ul className={styles['list']} role="list">
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
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles['down-part']}>
                <ul className={styles['list']} role="list">
                    <li>
                        <a href="">
                            <i className="far fa-copyright"></i> 2023 Infinity Inspiration</a>
                    </li>
                    <li>
                        <a href="">Privacy & Cookies</a>
                    </li>
                    <li>
                        <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="">User Rights</a>
                    </li>
                </ul>

                <span>Powered by IVo</span>
            </div>
        </footer>
    );
};