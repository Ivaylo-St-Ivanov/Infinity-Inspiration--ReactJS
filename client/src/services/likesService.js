import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/likes';

export const getLikes = async (postId) => {
    const searchQuery = encodeURIComponent(`postId="${postId}"`);
    // const relationQuery = encodeURIComponent('author=_ownerId:users');   &load=${relationQuery}

    const result = await request.get(`${baseUrl}?where=${searchQuery}`);
    
    return result;
};

export const addLike = async (postId, likes) => {
    const result = await request.post(baseUrl, { postId, likes });

    return result;
};