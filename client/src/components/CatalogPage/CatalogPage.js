import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../contexts/StateContext';
import { UserContext } from '../../contexts/UserContext';

import { Loading } from '../Loading/Loading';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { CatalogItem } from './CatalogItem/CatalogItem';
import styles from './CatalogPage.module.css';

export const CatalogPage = () => {
    const { posts, isLoading } = useContext(StateContext);
    const { isAuthenticated } = useContext(UserContext);

    return (
        <>
            <Header />

            {isLoading ? <Loading /> : (
                <div className={styles['main-catalog']}>
                    <section id={styles['facts']}>

                        {isAuthenticated && (
                            <div>
                                <Link className="btn btn-create" to={'/create-post'}>Create Post</Link>
                            </div>
                        )}

                        <div className={styles['cards']}>

                            {posts.length === 0 && (<span className={styles['empty-catalog']}><b>There are no posts yet!</b></span>)}


                            {posts.map(x => <CatalogItem key={x.objectId} {...x} />)}

                        </div>
                    </section>
                </div>
            )}

            <Footer />
        </>
    );
};