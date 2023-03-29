import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext';
import * as postsService from '../services/postsService';

export const StateContext = createContext();

export const StateProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        postsService.getAllPosts()
            .then(result => {
                setPosts(result);
            });
    }, []);

    const onCreatePostSubmit = async (data) => {
        const post = await postsService.createPost(data, token);
       
        setPosts(state => [post, ...state]);

        navigate('/catalog');
    };

    const onEditPostSubmit = async (values) => {
        const result = await postsService.editPost(values._id, values);

        setPosts(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
    };

    const onDelete = async (postId) => {
        await postsService.deletePost(postId, token);

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