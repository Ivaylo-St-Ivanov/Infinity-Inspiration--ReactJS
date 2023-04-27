import { useState, useEffect } from 'react';

import * as otherService from '../../../../services/otherService';

import { Header } from '../../../Header/Header';
import { Footer } from '../../../Footer/Footer';
import styles from './ChallengePage.module.css';

export const ChallengePage = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        otherService.getChallengePage()
            .then(result => {
                setState(result.results[0]);
            });
    }, []);
    
    return (
        <>
            <Header />

            <div className={styles['challenge-page']}>
                <img src={state.imageUrl} alt="field" />

                <h1>{state.title}</h1>

                <p>{state.content}</p>
            </div>

            <Footer />
        </>
    );
};