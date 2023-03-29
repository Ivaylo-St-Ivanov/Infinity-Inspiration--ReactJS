import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { StateContext } from '../../contexts/StateContext';

import styles from './CreatePost.module.css';

export const CreatePost = () => {
    const { onCreatePostSubmit } = useContext(StateContext);

    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        imageUrl: '',
        author: '',
        content: ''
    }, onCreatePostSubmit);

    return (
        <div className={styles['create']}>
            <div className={styles['img']}>
                <img src="./images/modern-art.avif" alt="modern-art" />
            </div>

            <div className={styles['form-create-edit']}>
                <h2>Create Post</h2>

                <form className={styles['create-form']} onSubmit={onSubmit}>
                    <input
                        value={values.title}
                        onChange={changeHandler}
                        type="text"
                        name="title"
                        id="post-title"
                        placeholder="Title"
                    />
                    <input
                        value={values.imageUrl}
                        onChange={changeHandler}
                        type="text"
                        name="imageUrl"
                        id="img-url"
                        placeholder="Image url"
                    />
                    <input
                        value={values.author}
                        onChange={changeHandler}
                        type="text"
                        name="author"
                        id="post-author"
                        placeholder="Author"
                    />
                    <textarea
                        value={values.content}
                        onChange={changeHandler}
                        id="post-content"
                        name="content"
                        placeholder="Content"
                        rows="12"
                    ></textarea>

                    <div className="buttons">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};