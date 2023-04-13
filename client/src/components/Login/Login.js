import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../contexts/UserContext';

import styles from './Login.module.css';

export const Login = () => {
    const { onLoginSubmit, error } = useContext(UserContext);

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);

    return (
        <div className={styles['login']}>
            <div className={styles['info']}>
                <Link className="anchor" to="/">Back to Home page</Link>
                <h2 className="logo">
                    <i className="fas fa-infinity"></i>
                    <Link to="/">Infinity Inspiration</Link>
                </h2>

                <span>Log in</span>

                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor="email">EMAIL</label>
                    <input 
                        type="email" 
                        className="email" 
                        name="email" 
                        placeholder="john@gmail.com" 
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">PASSWORD</label>
                    <input 
                        type="password" 
                        className="pass" 
                        name="password" 
                        placeholder="************" 
                        value={values.password}
                        onChange={changeHandler}
                    />

                    {error && (
                        <span className='error-message'>{error.message}</span>
                    )}

                    <div className={styles['forgot-pass']}>
                        <a className="anchor" href="">Forgot your password?</a>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="login-btn">LOG IN</button>
                        <span>OR</span>
                        <Link className="anchor" to="/register">SIGN UP</Link>
                    </div>

                </form>

                <span>LOG IN WITH</span>
                <ul role="list">
                    <li>
                        <a href="">
                            <i className="fab fa-apple"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fab fa-google"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles['login-img']}>
                <img src="./images/login.png" alt="abstraction" />
            </div>
        </div>
    );
};