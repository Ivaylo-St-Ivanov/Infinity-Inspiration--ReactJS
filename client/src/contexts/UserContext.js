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
                const { objectId, email, username, sessionToken } = await userService.login(data);
                
                setUser({ objectId, email, username, sessionToken });

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
            if (data.email === '' || data.username === '' || data.password === '' || data.repass === '') {
                throw new Error('All fields are required!');
            }
            setError('');

            const isValid = validation.isValidEmail(data.email);

            if (isValid) {
                const { repass, ...registerData } = data;
                if (repass !== registerData.password) {
                    throw new Error('Passwords don\'t match');
                }

                const { sessionToken, objectId } = await userService.register(registerData);

                const email = data.email;
                const username = data.username;

                setUser({ objectId, email, username, sessionToken });

                navigate('/catalog');
            } else {
                throw new Error('Invalid email address!');
            }
        } catch (error) {
            setError(error);
        }
    };

    const onLogout = async () => {
        await userService.logout(user.sessionToken);

        setUser({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: user.objectId,
        token: user.sessionToken,
        isAuthenticated: !!user.sessionToken,
        username: user.username,
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