import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import { StateProvider } from './contexts/StateContext';

import { HomePage } from './components/HomePage/HomePage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { CreatePost } from './components/CreatePost/CreatePost';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { PostDetails } from './components/PostDetails/PostDetails';
import { EditPost } from './components/EditPost/EditPost';
import { MessagePage } from './components/MessagePage/MessagePage';

function App() {

    return (
        <UserProvider>
            <StateProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    
                    <Route path='/create-post' element={<CreatePost />} />
                    <Route path='/catalog' element={<CatalogPage />} />
                    <Route path='/catalog/:postId' element={<PostDetails />} />
                    <Route path='/catalog/:postId/edit' element={<EditPost />} />

                    <Route path='/message' element={<MessagePage />} />
                </Routes>
            </StateProvider>
        </UserProvider>
    );
}

export default App;
