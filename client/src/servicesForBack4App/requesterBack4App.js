const appId = 'D0hN54K0yTVmwflZLNnXeIagUkTVqZmKagfZm5z7';
const apiKey = 'uw2n3hTKe7PbxNXN8eNRMc80oIlsfMVODMyO8ZyX';

const request = async (method, url, data) => {

    const user = localStorage.getItem('auth');
    const auth = JSON.parse(user || '{}');
    const token = auth.sessionToken;
   
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-REST-API-Key': apiKey
        }
    };

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Parse-Session-Token': token
        };
    }

    if (data !== undefined) {
            options.headers = {
                ...options.headers,
                'content-type': 'application/json',
                'X-Parse-Revocable-Session': '1'
            };

            options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || result.error);
        }

        return result;
    } catch (err) {
        throw err;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');