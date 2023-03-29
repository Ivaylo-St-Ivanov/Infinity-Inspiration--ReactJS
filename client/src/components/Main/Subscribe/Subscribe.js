import styles from './Subscribe.module.css';

export const Subscribe = () => {
    return (
        <section className={styles['subscribe']}>
            <div className={styles['img']}>
                <img src="./images/smarter_faster.svg" alt="smarter, faster" />
            </div>
            <div className={styles['input']}>
                <span>Never Miss a Good Opportunity</span>
                <input type="email" placeholder="Your email" />
                <button>SUBSCRIBE</button>
            </div>
        </section>
    );
};