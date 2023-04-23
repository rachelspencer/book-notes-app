import React from 'react';
import { useState } from 'react';
import searchBookCovers from '../api';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const AddNewBook = () => {
    const [cityImages, setCityImages ] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchBookCovers(term);
        setCityImages(result);
        console.log("Book cover:", cityImages, "result:", result, typeof result)
    }

    return (
        <div>
            <h3>Add new city</h3>
            <SearchBar onSubmit={handleSubmit}/>
            <BookList cityImages={cityImages}/>
        </div>
    );
};

export default AddNewBook;