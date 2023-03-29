import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CatalogItem } from './CatalogItem/CatalogItem';

import styles from './Catalog.module.css';
import { StateContext } from '../../contexts/StateContext';

export const Catalog = () => {
    const { posts } = useContext(StateContext);
    return (
        <div className={styles['main-catalog']}>
            <section id={styles['facts']}>
                <div>
                    <Link className="btn btn-create" to={'/create-post'}>Create Post</Link>
                </div>

                <div className={styles['cards']}>

                    {posts.map(x => <CatalogItem key={x._id} {...x} />)}

                </div>
            </section>
        </div>
    );
};