import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { searchBookCovers } from '../api';

const AddNewBook = () => {
    const [book, setBook ] = useState('');

    const handleSubmit = async (term) => {
        const result = await searchBookCovers(term);
        console.log('result', result);
        setBook(result);
        // console.log("Book cover:", cityImages, "result:", result, typeof result)
    }

    return (
        <div>
            <h3>Add new book</h3>
            <SearchBar onSubmit={handleSubmit}/>
            <BookList book={book}/>
        </div>
    );
};

export default AddNewBook;