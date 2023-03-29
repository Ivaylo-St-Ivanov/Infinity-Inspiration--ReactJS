import styles from './Questions.module.css';

export const Questions = () => {
    return (
        <section id={styles['question']}>
            <h2>Explore the world’s biggest questions</h2>
            <p>Dive in and think big with us.</p>

            <div className={styles['card']}>
                <div className={styles['title']}>
                    <h2>Will true AI turn against us?</h2>
                    <p>Will AI become an existential threat to humans?</p>
                    <a href="">Explore question</a>
                </div>
                <div className={styles['img']}>
                    <img src="./images/ai.webp" alt="AI" />
                </div>
            </div>

            <div className={styles['more-question']}>
                <ul className={styles['question-list']} role="list">
                    <li className={styles['item']}>
                        <h3>Do we have free will?</h3>
                        <p>Is free will a phantom of brain chemistry, or are we truly in control of our lives? A
                            question debated by great minds for millenia.</p>
                        <a href="">Explore question</a>
                    </li>
                    <li className={styles['item']}>
                        <h3>Should we trust science?</h3>
                        <p>Does science tell the truth?</p>
                        <a href="">Explore question</a>
                    </li>
                    <li className={styles['item']}>
                        <h3>Is religion helping or hurting us?</h3>
                        <p>Is the world better or worse with religion?</p>
                        <a href="">Explore question</a>
                    </li>
                    <li className={styles['item']}>
                        <h3>Why are there conspiracy theories?</h3>
                        <p>What is the psychology of fake news?</p>
                        <a href="">Explore question</a>
                    </li>
                    <li className={styles['item']}>
                        <h3>Are we alone in the universe?</h3>
                        <p>Will we ever find life elsewhere in the universe?</p>
                        <a href="">Explore question</a>
                    </li>
                </ul>
            </div>

            <div>
                <a href="">
                    Explore More Questions <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};