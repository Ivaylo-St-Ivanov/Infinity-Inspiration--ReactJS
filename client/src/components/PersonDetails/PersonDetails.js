import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PersonsContext } from '../../contexts/PersonsContext';

import { Header } from '../Header/Header';
import styles from '../PostDetails/PostDetails.module.css';

export const PersonDetails = () => {
    const { persons } = useContext(PersonsContext);
    const { personId } = useParams();

    const person = persons.find(x => x.objectId === personId);

    return (
        <>
            <Header />

            <div className={styles['details']}>
                <article className={styles['card']}>
                    <div className={styles['img']}>
                        <img src={person.imageUrl} alt={person.name} />
                    </div>

                    <div className={styles['content']}>
                        <h1>{person.name}</h1>

                        <div className={styles['middle']}>
                            <span className={styles['degree']}><b>{person.degree}</b></span>
                        </div>

                        <p>{person.content}</p>
                    </div>
                </article>
            </div>
        </>
    );
};