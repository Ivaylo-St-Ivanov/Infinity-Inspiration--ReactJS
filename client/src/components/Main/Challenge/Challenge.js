import styles from './Challenge.module.css';

export const Challenge = () => {
    return (
        <section className={styles['challenge']}>
            <img src="./images/rainbow_rings_field.jpg" alt="green fields" />
            <div className={styles['overlay']}></div>
            <div className={styles['title']}>
                <h1>The Future of Food Systems: Four Themes to Consider</h1>
                <p>Here are four themes to help guide us toward a better food future.</p>
                <a className="btn btn-challenge">Read the blog post</a>
            </div>
        </section>
    );
};