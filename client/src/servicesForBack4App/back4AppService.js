import * as request from './requesterBack4App';

const baseUrl = 'https://parseapi.back4app.com/classes/';

export const getChallengePage = async () => {
    const result = await request.get(baseUrl + 'ChallengePage');

    return result;
};