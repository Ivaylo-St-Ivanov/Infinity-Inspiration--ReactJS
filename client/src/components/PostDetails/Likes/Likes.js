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
                setLikes(result[0]);
                return setIsLiked(result[0].find(x => x.userId === userId) ? true : false);
            });
    }, [postId, userId]);
    
    const onLikeClick = async () => {
        const result = likes.find(x => x.userId === userId);
      
        if (result) {
            await likesService.dislike(result.objectId);
           
            setLikes(state => state.filter(x => x.userId !== userId));
            setIsLiked(false);
        } else {
            const res = await likesService.addLike(postId, userId);
            const data = {
                objectId: res.objectId,
                postId,
                userId,
                isLiked: true
            };
           
            setLikes(state => [...state, data]);
            setIsLiked(true);
        }
    };

    return (
        <>
            <span className={styles['likes']}><i className="far fa-heart"></i> Likes: {likes?.length}</span>

            {isAuthenticated && !isOwner && (
                <button className={isLiked ? 'liked' : ''} onClick={onLikeClick} ><i className="fas fa-thumbs-up"></i> Like</button>
            )}
        </>
    );
};