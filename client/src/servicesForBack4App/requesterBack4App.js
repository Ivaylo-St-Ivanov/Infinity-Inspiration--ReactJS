const request = async (method, url, param) => {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'D0hN54K0yTVmwflZLNnXeIagUkTVqZmKagfZm5z7',
            'X-Parse-REST-API-Key': 'uw2n3hTKe7PbxNXN8eNRMc80oIlsfMVODMyO8ZyX'
        }
    };

    if (method === 'GET') {
        if (param) {
            options.headers = {
                ...options.headers,
                'X-Parse-Master-Key': param
            };
        }
    } else {
        if (param) {
            const data = param;

            options.headers = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data);
        }
    }

    try {
        const response = await fetch(url, options);

        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
    } catch (err) {
        throw err;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');