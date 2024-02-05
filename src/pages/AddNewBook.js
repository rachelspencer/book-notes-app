import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { searchBookCovers } from '../api';
import './AddNewBook.css';

const AddNewBook = () => {
    const [book, setBook ] = useState('');
   
    const handleSubmit = async (term) => {
        const result = await searchBookCovers(term);
        console.log('result', result);
        setBook(result);
    }

    return (
        <div className='add_new_container'>
            <h3 className='add_new_book_heading'>Add new book</h3>
            <SearchBar onSubmit={handleSubmit}/>
            <BookList isLibrary={false} books={[book]}/>
        </div>
    );
};

export default AddNewBook;