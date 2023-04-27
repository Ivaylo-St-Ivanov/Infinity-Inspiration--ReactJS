import * as request from './requester';

const baseUrl = 'https://parseapi.back4app.com/classes/Likes';

export const getLikes = async (postId) => {
    const searchQuery = encodeURIComponent(`{"postId": "${postId}"}`);
    
    const response = await request.get(`${baseUrl}?where=${searchQuery}`);
    const result = Object.values(response);
    
    return result;
};

export const addLike = async (postId, userId) => {
    return await request.post(baseUrl, { postId, userId });
};

export const dislike = async (likeId) => {
    return await request.del(`${baseUrl}/${likeId}`);
};


