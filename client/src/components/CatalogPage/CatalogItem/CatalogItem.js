import { Link, useNavigate } from 'react-router-dom';

import styles from '../CatalogPage.module.css';

export const CatalogItem = ({
    objectId,
    title,
    imageUrl,
    author,
    content
}) => {
    const navigate = useNavigate();

    const text = content?.slice(0, 150) + ' .....';

    const onCardClick = () => {
        navigate(`/catalog/${objectId}`);
    };

    return (
        <article onClick={onCardClick} className={styles['card']}>
            <div>
                <Link to={`/catalog/${objectId}`}><img src={imageUrl} alt={title} /></Link>
            </div>
            <div className={styles['info']}>
                <h3><Link to={`/catalog/${objectId}`}>{title}</Link></h3>
                <p>{text}</p>
                <span>author: {author}</span>
            </div>
        </article>
    );
};