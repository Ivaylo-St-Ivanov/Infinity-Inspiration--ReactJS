import * as request from '../servicesForBack4App/requesterBack4App';

const baseUrl = 'https://parseapi.back4app.com';

export const login = (data) => {
    return request.post(`${baseUrl}/login`, data);
};

export const register = (data) => {
    return request.post(`${baseUrl}/users`, data);
};

export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Parse-Session-Token': token
        }
    });
};