import ReactLoading from 'react-loading';

import styles from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={styles['loading']}>
            <div>
                <span>Loading</span>
                <ReactLoading type='bubbles' color='blueviolet' height={60} width={70} />
            </div>
        </div>
    );
};