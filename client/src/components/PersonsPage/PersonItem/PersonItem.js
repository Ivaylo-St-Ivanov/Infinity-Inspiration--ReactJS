import styles from '../PersonsPage.module.css';

export const PersonItem = ({
    person
}) => {
    return (
        <div className={styles['card']}>
            <div>
                <img src={person.imageUrl} alt={person.name} />
            </div>
            <a href="">{person.name}</a>
            <span>{person.degree}</span>
        </div>
    );
};