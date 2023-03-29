import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';
import * as userService from '../services/userService';


export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {
    const [user, setUser] = useLocalStorage('auth', {});
    // const [user, setUser] = useState({});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await userService.login(data);

            setUser(result);

            navigate('/catalog');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onRegisterSubmit = async (data) => {
        const { repass, ...registerData } = data;
        if (repass !== registerData.password) {
            return;
        }

        try {
            const result = await userService.register(registerData);

            setUser(result);

            navigate('/catalog');
        } catch (error) {
            console.log(error);
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
        isAuthenticated: !!user.accessToken
    };

    return (
        <>
            <UserContext.Provider value={context}>
                {children}
            </UserContext.Provider>
        </>
    );
};