import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext';
import * as postsService from '../services/postsService';

export const StateContext = createContext();

export const StateProvider = ({
    children,
    pathname
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [error, SetError] = useState(null);
    const { userId } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        postsService.getAllPosts()
            .then(result => {
                setPosts(result.results);
                return setTimeout(setIsLoading(false), 800);
            });
    }, []);

    useEffect(() => {
        SetError(null);
    }, [pathname]);

    const onCreatePostSubmit = async (data) => {
        try {
            if (data.title === '' || data.imageUrl === '' || data.author === '' || data.content === '') {
                throw new Error('All fields are required!');
            }

            const result = await postsService.createPost(data, userId);

            const objectId = result.objectId;
            const title = data.title;
            const imageUrl = data.imageUrl;
            const author = data.author;
            const content = data.content;

            setPosts(state => [{ objectId, title, imageUrl, author, content}, ...state]);

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

            const objectId = values.objectId;
            const title = values.title;
            const imageUrl = values.imageUrl;
            const author = values.author;
            const content = values.content;
          
            await postsService.editPost(values.objectId, { objectId, title, imageUrl, author, content }, userId);
           
            setPosts(state => state.map(x => x.objectId === values.objectId ? { objectId, title, imageUrl, author, content } : x));

            navigate(`/catalog/${values.objectId}`);
        } catch (err) {
            SetError(err);
        }
    };

    const onDelete = async (postId) => {
        // eslint-disable-next-line no-restricted-globals
        const choice = confirm('Are you sure you want to delete this post?');

        if (choice) {
            await postsService.deletePost(postId);

            setPosts(state => state.filter(x => x.objectId !== postId));

            navigate('/catalog');
        }
    };

    const ctxState = {
        onCreatePostSubmit,
        onEditPostSubmit,
        onDelete,
        posts,
        error,
        isLoading
    };

    return (
        <>
            <StateContext.Provider value={ctxState}>
                {children}
            </StateContext.Provider>
        </>
    );
};