import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { StateContext } from '../../contexts/StateContext';
import * as postsService from '../../services/postsService';

import styles from './PostDetails.module.css';

export const PostDetails = () => {
    const { onDelete } = useContext(StateContext);

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { userId } = useContext(UserContext);

    useEffect(() => {
        postsService.getOnePost(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const onDeleteClick = () => {
        onDelete(postId);
    };

    const isOwner = post._ownerId === userId;

    return (
        <div className={styles['details']}>
            <article className={styles['card']}>
                <div className={styles['img']}>
                    <img src={post.imageUrl} alt={post.title} />
                </div>

                <div className={styles['content']}>
                    <h1>{post.title}</h1>

                    <div className={styles['middle']}>
                        <span>author: <b>{post.author}</b></span>

                        <div className={styles['btn-section']}>
                            <div className="buttons">
                                <span className={styles['likes']}><i className="far fa-heart"></i> Likes: 0</span>
                                <button className={styles['details-btn']}><i className="fas fa-thumbs-up"></i> Like</button>

                                {isOwner && (
                                    <>
                                        <button>
                                        <Link to={`/catalog/${postId}/edit`} className={styles['details-btn']}><i className="fas fa-pencil-alt"></i> Edit</Link>
                                        </button>
                                        <button className={styles['details-btn']} onClick={onDeleteClick}><i className="fas fa-trash-alt"></i> Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <p>{post.content}</p>

                </div>
            </article>
        </div>
    );
};