import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';
import * as likesService from '../../../services/likesService';

import styles from '../PostDetails.module.css';

export const Likes = ({
    postId,
    isOwner
}) => {
    const { isAuthenticated, userId } = useContext(UserContext);

    const [likes, setLikes] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        likesService.getLikes(postId)
            .then(result => {
                setLikes(result);
            });
    }, [postId]);

    const onLikeClick = async () => {
        const result = likes.find(x => x._ownerId === userId);

        if (result) {
            await likesService.dislike(result._id, userId);
            setLikes(state => state.filter(x => x._id !== result._id));
            setIsLiked(false);
        } else {
            const response = await likesService.addLike(postId, userId);
            setLikes(state => [...state, response]);
            setIsLiked(true);
        }
    };

    return (
        <>
            <span className={styles['likes']}><i className="far fa-heart"></i> Likes: {likes.length}</span>

            {isAuthenticated && !isOwner && (
                <button className={isLiked ? 'liked' : ''} onClick={onLikeClick} ><i className="fas fa-thumbs-up"></i> Like</button>
            )}
        </>
    );
};