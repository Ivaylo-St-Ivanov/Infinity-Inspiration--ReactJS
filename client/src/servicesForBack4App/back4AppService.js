import * as request from './requesterBack4App';

const baseUrl = 'https://parseapi.back4app.com/classes/';

export const getChallengePage = async () => {
    const result = await request.get(baseUrl + 'ChallengePage');

    return result;
};

export const getAllPersons = async () => {
    const result = await request.get(baseUrl + 'Persons');

    return result;
};

export const getPersonById = async (personId) => {
    const result = await request.get(`${baseUrl}/Persons/${personId}`);

    return result;
};

// export const searchPersonByRegex = async () => {
//     const searchQuery = encodeURIComponent('where=');

//     const result = await request.get(`${baseUrl}/Persons${searchQuery}`);
    
//     return result;
// };