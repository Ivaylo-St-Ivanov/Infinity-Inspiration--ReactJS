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

    const onSearchPersonSubmit = async (text) => {
        const { results } = await otherService.getPersonsByName(text.name);

        setPersons(results);
    };

    const ctx = {
        persons,
        onSearchPersonSubmit
    };

    return (
        <>
            <PersonsContext.Provider value={ctx}>
                {children}
            </PersonsContext.Provider>
        </>
    );
};
