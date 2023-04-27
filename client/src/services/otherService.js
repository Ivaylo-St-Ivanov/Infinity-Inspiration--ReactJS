import * as request from './requester';

const baseUrl = 'https://parseapi.back4app.com/classes/';

export const getChallengePage = async () => {
    return await request.get(baseUrl + 'ChallengePage');
};

export const getAllPersons = async () => {
    return await request.get(baseUrl + 'Persons');
};

export const getPersonById = async (personId) => {
    return await request.get(`${baseUrl}/Persons/${personId}`);
};