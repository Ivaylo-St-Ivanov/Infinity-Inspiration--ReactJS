import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/posts';

export const getAllPosts = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);
   
    return posts;
};

export const getOnePost = async (postId) => {
    const result = await request.get(`${baseUrl}/` + postId);
   
    return result;
};

export const createPost = async (data) => {
    const result = await request.post(baseUrl, data);
    
    return result;
};

export const editPost = async (postId, data) => {
    const result = await request.put(`${baseUrl}/` + postId, data);

    return result;
};

export const deletePost = async (postId) => {
    const result = await request.del(`${baseUrl}/` + postId);
    
    return result;
};

