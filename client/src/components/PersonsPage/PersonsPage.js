import { useContext, useState } from 'react';

import { PersonsContext } from '../../contexts/PersonsContext';

import { Loading } from '../Loading/Loading';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PersonItem } from './PersonItem/PersonItem';
import styles from './PersonsPage.module.css';

export const PersonsPage = () => {
    const { persons, isLoading, isVisible, onSearchPersonSubmit, onBackToAllPersons } = useContext(PersonsContext);

    const [search, setSearch] = useState('');

    const changeHandler = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: search
        };

        onSearchPersonSubmit(data);
        setSearch('');
    };

    const onBackButtonClick = () => {
        onBackToAllPersons();
    };

    return (
        <>
            <Header />

            {isLoading ? <Loading /> : (
                <div className={styles['persons-page']}>
                    <div className={styles['search-person']}>
                        <div className={styles['quote']}>
                            <img src="https://images.gr-assets.com/authors/1429114964p5/9810.jpg" alt="Albert Einstein" />
                            <div>
                                <blockquote>“It is not that I'm so smart. But I stay with the questions much longer.”</blockquote>
                                <hr />
                                <span>Albert Einstein</span>
                            </div>
                        </div>
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder='Search by full name'
                                value={search}
                                onChange={changeHandler}/>
                            <button>Search</button>
                        </form>
                    </div>

                    <article id={styles['persons']}>
                    
                        {isVisible && (
                            <button onClick={onBackButtonClick} className={styles['all-persons-btn']}>Back</button>
                        )}

                        <div className={styles['cards']}>

                            {persons.length === 0 && (
                                <div className={styles['not-result']}>
                                    <p>Not found results!</p>
                                </div>
                            )}

                            {persons.map(person => (
                                <PersonItem key={person.objectId} person={person} />
                            ))}

                        </div>
                    </article>
                </div>
            )}

            <Footer />
        </>
    );
};