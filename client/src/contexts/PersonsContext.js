import { createContext, useState, useEffect } from 'react';

import * as back4AppService from '../servicesForBack4App/back4AppService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        back4AppService.getAllPersons()
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
