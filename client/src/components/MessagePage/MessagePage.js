import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './MessagePage.module.css';

export const MessagePage = () => {
    return (
        <>
            <Header />

            <div className={styles['info-message']}>
                <span><b>This page is in process of develop</b></span>
            </div>

            <Footer />
        </>
    );
};