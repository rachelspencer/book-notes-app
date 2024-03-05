import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/authContext'
import Login from "./pages/Login";
import YourLibrary from "./pages/YourLibrary";
import NavBar from './components/NavBar';
import AddNewBook from './pages/AddNewBook';
import './App.css';

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <div className='app_container'>
            {authCtx.token && <NavBar/>}
            {authCtx.token && <h2>BookNotes</h2>}
            <Routes>
                <Route exact path="/auth" element={!authCtx.token ? <Login/> : <Navigate to='/'/>}/>
                <Route exact path="/" element={authCtx.token ? <YourLibrary/> : <Navigate to='/auth'/>}/>
                <Route exact path="/add" element={<AddNewBook/>}/>
            </Routes>
        </div>
    );
};

export default App;