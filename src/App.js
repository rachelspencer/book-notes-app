import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import MainDisplay from "./pages/MainDisplay";
import BookShow from './components/BookShow';
import NavBar from './components/NavBar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/home" element={<MainDisplay/>}/>
                <Route path="/bookshow" element={<BookShow/>}/>
                <Route path="/add" element={<NavBar/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;