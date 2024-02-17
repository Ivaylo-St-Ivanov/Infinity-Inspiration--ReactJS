import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { StateContext } from '../../contexts/StateContext';
import styles from './DeleteModal.module.css';

export const DeleteModal = ({ setConfirmationModal }) => {
    const { onDelete } = useContext(StateContext);
    const { postId } = useParams();

    const onDeleteConfirmationClick = () => {
        onDelete(postId);
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['wrapper-modal']}>
                <p>Are you sure you want to delete this post?</p>
                <div>
                    <button onClick={onDeleteConfirmationClick}>Yes, DELETE</button>
                    <button onClick={() => setConfirmationModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};