import { createContext, useState, useEffect } from 'react';

import * as otherService from '../services/otherService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        otherService.getAllPersons()
            .then(result => {
                setPersons(result.results);
            });
    }, []);

    const ctx = {
        persons
    };

    return (
        <>
            <PersonsContext.Provider value={ctx}>
                {children}
            </PersonsContext.Provider>
        </>
    );
};
