import { Link } from 'react-router-dom';

import styles from './About.module.css';

export const About = () => {
    return (
        <section id={styles['about']}>
            <h2>Our mission and vision</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias tenetur cumque ipsum earum,
                    reprehenderit, rerum, tempore nemo veniam quaerat nostrum saepe blanditiis. Eligendi ut impedit,
                    voluptatibus temporibus repellat illo nisi. Earum, omnis rem at ex voluptas quos temporibus,
                    similique dicta voluptate et error inventore laborum corporis eligendi deserunt sint eius laboriosam
                    recusandae molestiae ipsam asperiores, corrupti aut impedit totam. Excepturi vel omnis repudiandae
                    cumque! Asperiores inventore eum aut, velit, sequi alias ducimus commodi est consequatur odio sint
                    neque culpa ratione, laborum deleniti fugiat tempora perspiciatis. Inventore fugiat, cumque repellat
                    commodi ab aspernatur officia, distinctio aut eligendi suscipit soluta fugit?</p>
            </div>

            <div>
                <Link to='/about-page'>
                    Learn More <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};