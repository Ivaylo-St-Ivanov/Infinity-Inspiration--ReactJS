import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { StateContext } from '../../contexts/StateContext';
import * as postsService from '../../services/postsService';
import * as likesService from '../../services/likesService';

import styles from './PostDetails.module.css';

export const PostDetails = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    
    const { isAuthenticated, userId } = useContext(UserContext);
    const { onDelete } = useContext(StateContext);

    const [likes, setLikes] = useState('0');
    const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {
        likesService.getLikes(postId)
            .then(result => {
                setLikes(result.length);
            });
    }, [postId]);

    useEffect(() => {
        postsService.getOnePost(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const onEditClick = () => {
        navigate(`/catalog/${postId}/edit`);
    };

    const onLikeClick = async () => {
        const newLikes = Number(likes) + 1;
        const response = await likesService.addLike(postId, newLikes);

        setLikes(response.likes);
        setDisabled(true);
    };

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
                                <span className={styles['likes']}><i className="far fa-heart"></i> Likes: {likes}</span>

                                {isAuthenticated && !isOwner && (
                                    <button className={styles['details-btn']} onClick={onLikeClick} disabled={isDisabled}><i className="fas fa-thumbs-up"></i> Like</button>
                                )}

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
    );
};