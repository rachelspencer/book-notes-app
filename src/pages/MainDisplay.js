import React from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';


function MainDisplay() {

    return (
        <div>
            <SearchBar />
            <BookList />
        </div>
    );
};

export default MainDisplay;