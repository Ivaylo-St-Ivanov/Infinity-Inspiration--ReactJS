import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';
import * as userService from '../services/userService';
import * as validation from '../services/emailValidation';

export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('auth', {});
    const [error, setError] = useState(null);

    const onLoginSubmit = async (data) => {
        try {
            if (data.email === '' || data.password === '') {
                throw new Error('All fields are required!');
            }
            setError('');

            const isValid = validation.isValidEmail(data.email);

            if (isValid) {
                const result = await userService.login(data);

                setUser(result);

                navigate('/catalog');
            } else {
                throw new Error('Invalid email address!');
            }
        } catch (err) {
            setError(err);
        }
    };

    const onRegisterSubmit = async (data) => {
        try {
            if (data.email === '' || data.password === '' || data.repass === '') {
                throw new Error('All fields are required!');
            }
            setError('');

            const isValid = validation.isValidEmail(data.email);

            if (isValid) {
                const { repass, ...registerData } = data;
                if (repass !== registerData.password) {
                    throw new Error('Passwords don\'t match');
                }

                const result = await userService.register(registerData);

                setUser(result);

                navigate('/catalog');
            } else {
                throw new Error('Invalid email address!');
            }
        } catch (error) {
            setError(error);
        }
    };

    const onLogout = async () => {
        await userService.logout(user.accessToken);

        setUser({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: user._id,
        token: user.accessToken,
        userEmail: user.email,
        isAuthenticated: !!user.accessToken,
        error
    };

    return (
        <>
            <UserContext.Provider value={context}>
                {children}
            </UserContext.Provider>
        </>
    );
};