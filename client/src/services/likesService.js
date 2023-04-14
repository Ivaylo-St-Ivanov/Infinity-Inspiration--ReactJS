import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/likes';

export const getLikes = async (postId) => {
    const searchQuery = encodeURIComponent(`postId="${postId}"`);
    // const relationQuery = encodeURIComponent('author=_ownerId:users');   &load=${relationQuery}

    const result = await request.get(`${baseUrl}?where=${searchQuery}`);
    
    return result;
};

export const addLike = async (postId, userId) => {
    const result = await request.post(baseUrl, { postId, userId });

    return result;
};

export const dislike = async (likeId, userId) => {
    const searchQuery = encodeURIComponent(`userId="${userId}"`);

    const result = await request.del(`${baseUrl}/${likeId}?where=${searchQuery}`);

    return result;
};