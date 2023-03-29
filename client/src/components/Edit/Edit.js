import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { StateContext } from '../../contexts/StateContext';
import * as postService from '../../services/postsService';

import styles from '../CreatePost/CreatePost.module.css';

export const Edit = () => {
    const { onEditPostSubmit } = useContext(StateContext);

    const [initValues, setValues] = useState([]);
    const { postId } = useParams();
    const { values, changeHandler, onSubmit } = useForm({
        _id: '',
        title: '',
        imageUrl: '',
        author: '',
        content: ''
    }, onEditPostSubmit);
    // console.log(initValues._id);
    useEffect(() => {
        postService.getOnePost(postId)
            .then(result => {
                setValues(result);
            });
    }, [postId]);

    return (
        <main className={styles['edit']}>
            <div className={styles['form-create-edit']}>
                <h2>Edit Post</h2>

                <form className={styles['edit-form']} onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="title"
                        id="post-title"
                        placeholder="Title"
                        value={values.title}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="img-url"
                        placeholder="Image url"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        name="author"
                        id="post-author"
                        placeholder="Author"
                        value={values.author}
                        onChange={changeHandler}
                    />
                    <textarea
                        id="post-content"
                        name="content"
                        placeholder="Content"
                        value={values.content}
                        onChange={changeHandler}
                        rows="12"
                    ></textarea>

                    <div className="buttons">
                        <button type="submit">Edit</button>
                    </div>
                </form>
            </div>

            <div className={styles['img']}>
                <img src="./images/chess.avif" alt="chess" />
            </div>
        </main>
    );
};