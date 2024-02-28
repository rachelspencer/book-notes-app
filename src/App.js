import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/authContext'
import Login from "./pages/Login";
import MainDisplay from "./pages/MainDisplay";
import NavBar from './components/NavBar';
import MainDisplayHeader from './components/MainDisplayHeader';
import AddNewBook from './pages/AddNewBook';
import './App.css';

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <div className='app_container'>
            {authCtx.token && <NavBar/>}
            {authCtx.token && <MainDisplayHeader/>}
            <Routes>
                <Route exact path="/auth" element={!authCtx.token ? <Login/> : <Navigate to='/'/>}/>
                <Route path="/" element={authCtx.token ? <MainDisplay/> : <Navigate to='/auth'/>}/>
                <Route path="/add" element={<AddNewBook/>}/>
            </Routes>
        </div>
    );
};

export default App;