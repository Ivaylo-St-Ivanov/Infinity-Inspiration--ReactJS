import { useContext } from 'react';

import { PersonsContext } from '../../contexts/PersonsContext';
import { useForm } from '../../hooks/useForm';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PersonItem } from './PersonItem/PersonItem';
import styles from './PersonsPage.module.css';

export const PersonsPage = () => {
    const { onSearchPersonSubmit, persons } = useContext(PersonsContext);
    const { values, changeHandler, onSubmit } = useForm({
        name: ''
    }, onSearchPersonSubmit);

    return (
        <>
            <Header />

            <div className={styles['persons-page']}>
                <div className={styles['search-btn']}>
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
                        placeholder='Search here'
                        value={values.name}
                        onChange={changeHandler} />
                        <button>Search</button>
                    </form>
                </div>

                <article id={styles['persons']}>

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

            <Footer />
        </>
    );
};