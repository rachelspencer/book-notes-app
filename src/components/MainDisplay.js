import { useState } from 'react';
import MainDisplayHeader from './MainDisplayHeader';
import NavBar from './NavBar';
import BookList from './BookList';
import SearchBar from './SearchBar';

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