import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../../contexts/StateContext';
import { CatalogItem } from '../../Catalog/CatalogItem/CatalogItem';

import styles from '../../Catalog/Catalog.module.css';

export const Facts = () => {
    const { posts } = useContext(StateContext);

    const firstSix = posts.slice(0, 6);

    return (
        <section id={styles['facts']}>
            <div className={styles['cards']}> 

            {firstSix.map(x => <CatalogItem key={x._id} {...x} /> )}

            </div>

            <div className={styles['explore-more']}>
                <Link to="/catalog">
                    Explore More <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};