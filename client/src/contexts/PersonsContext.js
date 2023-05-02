import { createContext, useState, useEffect } from 'react';

import * as otherService from '../services/otherService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        otherService.getAllPersons()
            .then(result => {
                setPersons(result.results);
                return setTimeout(setIsLoading(false), 800);
            });
    }, []);

    const onSearchPersonSubmit = async (text) => {
        const { results } = await otherService.getPersonsByName(text.name);

        setPersons(results);
    };

    const ctx = {
        persons,
        isLoading,
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
