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
    }

    return (
        <div>
            <h3 className='add_new_book_heading'>Add new book</h3>
            <SearchBar onSubmit={handleSubmit}/>
            <BookList isLibrary={false} books={[book]}/>
        </div>
    );
};

export default AddNewBook;