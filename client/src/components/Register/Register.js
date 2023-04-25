import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../contexts/UserContext';

import styles from './Register.module.css';

export const Register = () => {
    const { onRegisterSubmit, error } = useContext(UserContext);
    
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        repass: ''
    }, onRegisterSubmit);

    return (
        <div className={styles['register']}>
            <div className={styles['img']}>
                <img src="./images/towers.avif" alt="Towers" />
            </div>

            <div className={styles['overlay']}></div>

            <div className={styles['register-form']}>
                <Link className="anchor" to="/">Back to Home page</Link>
                <h2 className="logo">
                    <i className="fas fa-infinity"></i>
                    <Link to="/">Infinity Inspiration</Link>
                </h2>

                <span>Sign up</span>

                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor="email">EMAIL</label>
                    <input
                        type="email"
                        className="email"
                        name="email"
                        placeholder="john@gmail.com"
                        value={values.email}
                        onChange={changeHandler} />
                    <label htmlFor="username">USERNAME</label>
                    <input
                        type="text"
                        className="username"
                        name="username"
                        placeholder="john doe"
                        value={values.username}
                        onChange={changeHandler} />
                    <label htmlFor="pass">PASSWORD</label>
                    <input
                        type="password"
                        className="pass"
                        name="password"
                        placeholder="************"
                        value={values.password}
                        onChange={changeHandler} />
                    <label htmlFor="re-pass">CONFIRM PASSWORD</label>
                    <input
                        type="password"
                        className="repass"
                        name="repass"
                        placeholder="************"
                        value={values['repass']}
                        onChange={changeHandler} />

                    {error && (
                        <span className='error-message'>{error.message}</span>
                    )}

                    <div className="buttons">
                        <button className="login-btn">SIGN UP</button>
                        <span>OR</span>
                        <Link className="anchor" to="/login">LOG IN</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};