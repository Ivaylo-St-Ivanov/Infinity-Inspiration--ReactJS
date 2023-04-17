import { useNavigate } from 'react-router-dom';

import styles from '../PersonsPage.module.css';

export const PersonItem = ({
    person
}) => {
    const navigate = useNavigate();

    const onPersonCardClick = () => {
        navigate(`/persons-page/${person.objectId}`);
    };

    return (
        <div className={styles['card']} onClick={onPersonCardClick}>
            <div>
                <img src={person.imageUrl} alt={person.name} />
            </div>
            <span className={styles['person-name']}>{person.name}</span>
            <span>{person.degree}</span>
        </div>
    );
};