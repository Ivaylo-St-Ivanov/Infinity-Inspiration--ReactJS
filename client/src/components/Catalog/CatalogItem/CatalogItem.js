import styles from '../Catalog.module.css';

import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
    author,
    content
}) => {
    const text = content.slice(0, 150) + ' .....';

    return (
        <article className={styles['card']}>
            <div>
                <Link to={`/catalog/${_id}`}><img src={imageUrl} alt={title} /></Link>
            </div>
            <div className={styles['info']}>
                <h3><Link to={`/catalog/${_id}`}>{title}</Link></h3>
                <p>{text}</p>
                <span>author: {author}</span>
            </div>
        </article>
    );
};