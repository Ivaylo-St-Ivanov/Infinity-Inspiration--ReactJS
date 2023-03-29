import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = (data) => {
    return request.post(`${baseUrl}/login`, data);
};

export const register = (data) => {
    return request.post(`${baseUrl}/register`, data);
};

export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': token
        }
    });
};