import * as request from './requester';
import { addOwner } from '../utils/utils';

const baseUrl = 'https://parseapi.back4app.com/classes/Posts';

export const getAllPosts = async () => {
    return await request.get(baseUrl);
};

export const getOnePost = async (postId) => {
    return await request.get(`${baseUrl}/` + postId);
};

export const createPost = async (data, userId) => { 
    return await request.post(baseUrl, addOwner(data, userId));
};

export const editPost = async (postId, data, userId) => {
    return await request.put(`${baseUrl}/` + postId, addOwner(data, userId));
};

export const deletePost = async (postId) => {
    return  await request.del(`${baseUrl}/` + postId);
};

