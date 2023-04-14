import React from 'react';
import { useState } from 'react';
import MainDisplayHeader from '../components/MainDisplayHeader';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import BookList from '../components/BookList';


function MainDisplay() {
    const [books, setBooks ] = useState([]);

    return (
        <div>
            <MainDisplayHeader/>
            <SearchBar />
            <NavBar/>
            <BookList />
        </div>
    );
};

export default MainDisplay;