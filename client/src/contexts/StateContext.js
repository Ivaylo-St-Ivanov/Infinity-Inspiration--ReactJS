import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as postsService from '../services/postsService';

export const StateContext = createContext();

export const StateProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAllPosts()
            .then(result => {
                setPosts(result);
            });
    }, []);

    const onCreatePostSubmit = async (data) => {
        const post = await postsService.createPost(data);
       
        setPosts(state => [post, ...state]);

        navigate('/catalog');
    };

    const onEditPostSubmit = async (values) => {
        const result = await postsService.editPost(values._id, values);

        setPosts(state => state.map(x => x._id === values._id ? result : x));
        
        navigate(`/catalog/${values._id}`);
    };

    const onDelete = async (postId) => {
        await postsService.deletePost(postId);

        setPosts(state => state.filter(x => x._id !== postId));
      
        navigate('/catalog');
    };

    const ctxState = {
        onCreatePostSubmit,
        onEditPostSubmit,
        onDelete,
        posts
    };

    return (
        <>
            <StateContext.Provider value={ctxState}>
                {children}
            </StateContext.Provider>
        </>
    );
};