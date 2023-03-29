import styles from './Quote.module.css';

export const Quote = () => {
    return (
        <div className={styles['quote']}>
            <blockquote>
                <p>People think of education as something that they can finish.</p>
                <span>Isaac Asimov</span>
                <hr />
            </blockquote>
        </div>
    );
};