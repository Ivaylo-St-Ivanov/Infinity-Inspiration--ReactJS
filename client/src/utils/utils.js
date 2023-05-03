export const isValidEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
        return;
    }

    return email;
};

export const createPointer = (className, objectId) => {
    return { __type: 'Pointer', className, objectId };
};

export const addOwner = (record, ownerId) => {
    const data = {
        ...record,
        owner: createPointer('_User', ownerId)
    };

    return data;
};
