import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PersonsContext } from '../../../contexts/PersonsContext';
import { PersonItem } from '../../PersonsPage/PersonItem/PersonItem';

import styles from '../../PersonsPage/PersonsPage.module.css';

export const Persons = () => {
    const { persons } = useContext(PersonsContext);

    const firstFive = persons.slice(0, 5);

    return (
        <section id={styles['persons']}>
            <h2>Learn from the world’s greatest thinkers</h2>
            <p>Get insights from thought leaders across all fields and industries.</p>

            <div className={styles['cards']}>

                {firstFive.map(person => (
                    <PersonItem key={person.objectId} person={person} />
                ))}
                
            </div>

            <div>
                <Link to="/persons-page">
                    Show More <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};