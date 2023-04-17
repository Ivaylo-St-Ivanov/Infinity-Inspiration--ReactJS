import { useContext } from 'react';

import { PersonsContext } from '../../contexts/PersonsContext';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PersonItem } from './PersonItem/PersonItem';
import styles from './PersonsPage.module.css';

export const PersonsPage = () => {
    const { persons } = useContext(PersonsContext);

    return (
        <>
            <Header />

            <article id={styles['persons']}>

                <div className={styles['cards']}>

                    {persons.map(person => (
                        <PersonItem key={person.objectId} person={person} />
                    ))}    

                </div>
            </article>

            <Footer />
        </>
    );
};