import styles from './TopImg.module.css';

export const TopImg = () => {
    return (
        <div className={styles['top-img-container']}>
            <img src="./images/top-image.avif" alt="Singapore" />
                <div className={styles['overlay']}></div>
                <div className={styles['title']}>
                    <h1>Learn New Things Everyday</h1>
                    <span>Together is better</span>
                </div>
        </div>
    );
};