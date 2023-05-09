import { Link } from 'react-router-dom';

import styles from './Ideas.module.css';

export const Ideas = () => {
    return (
        <section id={styles['ideas']}>
            <h2>Big ideas in 10 minutes or less</h2>
            <p>Explore our library of more than 2,000 interviews</p>

            <div className={styles['container']}>
                <div className={styles['title']}>
                    <h2>
                        <a href="">Master divergent and convergent thinking </a>
                    </h2>
                    <span>with Tim Morgan</span>
                </div>
                <div className={styles['img']}>
                    <img src="./images/image-1364.jpg" alt="human" />
                    <div className={styles['overlay']}></div>
                    <a href="">
                        <i className="far fa-play-circle"></i>
                    </a>
                </div>
                <div className={styles['author']}>
                    <img src="./images/tim-morgan.avif" alt="Tim Morgan" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint hic earum distinctio, pariatur,
                        adipisci odit voluptates dolores accusantium ab, delectus explicabo quibusdam officia? Aliquam
                        autem debitis illo nisi rem nobis!</p>
                </div>
            </div>

            <div>
                <Link to="/message">
                    Explore More Videos <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};