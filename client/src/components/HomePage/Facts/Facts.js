import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../../contexts/StateContext';

import { CatalogItem } from '../../CatalogPage/CatalogItem/CatalogItem';
import styles from '../../CatalogPage/CatalogPage.module.css';

export const Facts = () => {
    const { posts } = useContext(StateContext);

    const firstSix = posts.slice(0, 6);

    return (
        <section id={styles['facts']}>
            <div className={styles['cards']}>

                {firstSix.map(x => <CatalogItem key={x._id} {...x} />)}

                {posts.length === 0 && (<span className={styles['empty-catalog']}><b>There are no posts yet!</b></span>)}

            </div>

            {posts.length > 0 && (
                <div className={styles['explore-more']}>
                    <Link to="/catalog">
                        Explore More <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )}
        </section>
    );
};