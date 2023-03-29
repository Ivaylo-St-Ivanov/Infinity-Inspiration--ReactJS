import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import { StateProvider } from './contexts/StateContext';

import { Catalog } from './components/Catalog/Catalog';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { About } from './components/Main/About/About';
import { TopImg } from './components/Main/TopImg/TopImg';
import { Persons } from './components/Main/Persons/Persons';
import { Quote } from './components/Main/Quote/Quote';
import { Register } from './components/Register/Register';
import { Aside } from './components/Main/Aside/Aside';
import { Questions } from './components/Main/Questions/Questions';
import { Challenge } from './components/Main/Challenge/Challenge';
import { Subscribe } from './components/Main/Subscribe/Subscribe';
import { Ideas } from './components/Main/Ideas/Ideas';
import { Facts } from './components/Main/Facts/Facts';
import { PostDetails } from './components/PostDetails/PostDetails';
import { Logout } from './components/Logout/Logout';
import { Edit } from './components/Edit/Edit';

function App() {

    return (
        <UserProvider>
            <StateProvider>
            <Routes>
                <Route path='/' element={
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
                } />

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />

                <Route path='/create-post' element={
                    <>
                        <Header />

                        <CreatePost />
                    </>
                } />

                <Route path='/catalog' element={
                    <>
                        <Header />

                        <Catalog />

                        <Footer />
                    </>
                } />

                <Route path='/catalog/:postId' element={
                    <>
                        <Header />

                        <PostDetails />
                    </>
                } />

                <Route path='/catalog/:postId/edit' element={<Edit />} />
            </Routes>
            </StateProvider>
        </UserProvider>
    );
}

export default App;
