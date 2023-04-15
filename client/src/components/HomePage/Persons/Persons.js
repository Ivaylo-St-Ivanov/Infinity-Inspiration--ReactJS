import styles from './Persons.module.css';

export const Persons = () => {
    return (
        <section id={styles['persons']}>
            <h2>Learn from the world’s greatest thinkers</h2>
            <p>Get insights from thought leaders across all fields and industries.</p>

            <div className={styles['cards']}>
                <div className={styles['card']}>
                    <div>
                        <img src="./images/john-smith.avif" alt="John Smith" />
                    </div>
                    <a href="">John Smith</a>
                    <span>Professor of Psychology</span>
                </div>

                <div className={styles['card']}>
                    <div>
                        <img src="./images/lesly-moor.avif" alt="Lesly Moor" />
                    </div>
                    <a href="">Lesly Moor</a>
                    <span>Neuroscientist</span>
                </div>

                <div className={styles['card']}>
                    <div>
                        <img src="./images/jim-rohn.avif" alt="Jim Rohn" />
                    </div>
                    <a href="">Jim Rohn</a>
                    <span>Professor, Washington University</span>
                </div>

                <div className={styles['card']}>
                    <div>
                        <img src="./images/bob-seaman.avif" alt="Bob Seaman" />
                    </div>
                    <a href="">Bob Seaman</a>
                    <span>Author</span>
                </div>

                <div className={styles['card']}>
                    <div>
                        <img src="./images/paul-donovan.avif" alt="Paul Donovan" />
                    </div>
                    <a href="">Paul Donovan</a>
                    <span>Professor of Psychiatry</span>
                </div>
            </div>

            <div>
                <a href="">
                    Show More <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};