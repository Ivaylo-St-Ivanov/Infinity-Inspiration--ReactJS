import { Header } from '../Header/Header';
import { About } from './About/About';
import { TopImg } from './TopImg/TopImg';
import { Persons } from './Persons/Persons';
import { Quote } from './Quote/Quote';
import { Aside } from './Aside/Aside';
import { Questions } from './Questions/Questions';
import { Challenge } from './Challenge/Challenge';
import { Subscribe } from './Subscribe/Subscribe';
import { Ideas } from './Ideas/Ideas';
import { Facts } from './Facts/Facts';
import { Footer } from '../Footer/Footer';

export const HomePage = () => {
    return (
        <>
            <Header />

            <main className="main">
                <TopImg />
                <About />
                <Quote />
                <Persons />
                <Aside />
                <Questions />
                <Challenge />
                <Subscribe />
                <Ideas />
                <Facts />
            </main>

            <Footer />
        </>
    );
};