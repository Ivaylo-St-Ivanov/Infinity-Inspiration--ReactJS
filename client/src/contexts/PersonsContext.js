import { createContext, useState, useEffect } from 'react';

import * as otherService from '../services/otherService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        otherService.getAllPersons()
            .then(result => {
                setIsVisible(false);
                setPersons(result.results);
                return setTimeout(setIsLoading(false), 800);
            });
    }, []);

    const onBackToAllPersons = async () => {
        const { results } = await otherService.getAllPersons();

        setIsVisible(false);
        setPersons(results);
    };

    const ctx = {
        persons,
        isLoading,
        isVisible,
        onBackToAllPersons
    };

    return (
        <>
            <PersonsContext.Provider value={ctx}>
                {children}
            </PersonsContext.Provider>
        </>
    );
};
