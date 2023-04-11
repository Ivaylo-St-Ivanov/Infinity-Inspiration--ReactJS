import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { StateContext } from '../../contexts/StateContext';
import * as postService from '../../services/postsService';

import styles from '../CreatePost/CreatePost.module.css';

export const Edit = () => {
    const { onEditPostSubmit } = useContext(StateContext);

    // const [initValues, setValues] = useState({});
    const { postId } = useParams();
    
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        // _id: '',
        title: '',
        imageUrl: '',
        author: '',
        content: ''
    }, onEditPostSubmit);

    useEffect(() => {
        postService.getOnePost(postId)
            .then(result => {
                changeValues(result);
            });
    }, [postId]);

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     onEditPostSubmit(initValues);
    // };

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
                        // defaultValue={initValues.title}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="img-url"
                        placeholder="Image url"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        // defaultValue={initValues.imageUrl}
                    />
                    <input
                        type="text"
                        name="author"
                        id="post-author"
                        placeholder="Author"
                        value={values.author}
                        onChange={changeHandler}
                        // defaultValue={initValues.author}
                    />
                    <textarea
                        id="post-content"
                        name="content"
                        placeholder="Content"
                        value={values.content}
                        onChange={changeHandler}
                        // defaultValue={initValues.content}
                        rows="12"
                    ></textarea>

                    <div className="buttons">
                        <button type="submit">Edit</button>
                    </div>
                </form>
            </div>

            <div className={styles['img']}>
                <img src="/images/chess.avif" alt="chess" />
            </div>
        </main>
    );
};