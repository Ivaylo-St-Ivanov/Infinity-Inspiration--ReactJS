import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as postsService from '../services/postsService';

export const StateContext = createContext();

export const StateProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [error, SetError] = useState(null);

    useEffect(() => {
        postsService.getAllPosts()
            .then(result => {
                setPosts(result);
            });
    }, []);

    const onCreatePostSubmit = async (data) => {
        try {
            if (data.title === '' || data.imageUrl === '' || data.author === '' || data.content === '') {
                throw new Error('All fields are required!');
            }
            SetError('');

            const post = await postsService.createPost(data);

            setPosts(state => [post, ...state]);

            navigate('/catalog');
        } catch (err) {
            SetError(err);
        }
    };

    const onEditPostSubmit = async (values) => {
        try {
            if (values.title === '' || values.imageUrl === '' || values.author === '' || values.content === '') {
                throw new Error('All fields are required!');
            }
            SetError('');

            const result = await postsService.editPost(values._id, values);

            setPosts(state => state.map(x => x._id === values._id ? result : x));

            navigate(`/catalog/${values._id}`);
        } catch (err) {
            SetError(err);
        }
    };

    const onDelete = async (postId) => {
        // eslint-disable-next-line no-restricted-globals
        const choice = confirm('Are you sure you want to delete this post?');

        if (choice) {
            await postsService.deletePost(postId);

            setPosts(state => state.filter(x => x._id !== postId));

            navigate('/catalog');
        }
    };

    const ctxState = {
        onCreatePostSubmit,
        onEditPostSubmit,
        onDelete,
        posts,
        error
    };

    return (
        <>
            <StateContext.Provider value={ctxState}>
                {children}
            </StateContext.Provider>
        </>
    );
};