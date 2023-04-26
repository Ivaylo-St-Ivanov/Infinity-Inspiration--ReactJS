import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { StateContext } from '../../contexts/StateContext';
import * as postsService from '../../services/postsService';

import { Header } from '../Header/Header';
import { Likes } from './Likes/Likes';
import styles from './PostDetails.module.css';

export const PostDetails = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});

    const { userId } = useContext(UserContext);
    const { onDelete } = useContext(StateContext);
    
    useEffect(() => {
        postsService.getOnePost(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const onEditClick = () => {
        navigate(`/catalog/${postId}/edit`);
    };

    const onDeleteClick = () => {
        onDelete(postId);
    };

    const isOwner = post.owner?.objectId === userId;

    return (
        <>
            <Header />

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

                                    <Likes postId={postId} isOwner={isOwner} />

                                    {isOwner && (
                                        <>
                                            <button className={styles['details-btn']} onClick={onEditClick}><i className="fas fa-pencil-alt"></i> Edit</button>
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
        </>
    );
};