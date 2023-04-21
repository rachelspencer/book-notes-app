import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/authContext'
import Login from "./pages/Login";
import MainDisplay from "./pages/MainDisplay";
import BookShow from './components/BookShow';
import NavBar from './components/NavBar';

function App() {
    const authCtx = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/auth" element={!authCtx.token ? <Login/> : <Navigate to='/'/>}/>
                <Route path="/" element={authCtx.token ? <MainDisplay/> : <Navigate to='/auth'/>}/>
                <Route path="/bookshow" element={<BookShow/>}/>
                <Route path="/add" element={<NavBar/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;