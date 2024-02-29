import React, { useEffect, useState, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import AuthContext from "../context/authContext";
import { getBooksForUser } from '../api';


function MainDisplay() {
    const { userId } = useContext(AuthContext);
    const [ books, setBooks ] = useState([]);

    console.log("userId from context", userId)
    const fetchBooks = async (userId) => {
        const result = await getBooksForUser(userId)
        setBooks(result.data);
    };
    
    useEffect(() => {
        fetchBooks(userId); 
    }, [userId]);

    return (
        <div>
            <h3 className='add_new_book_heading'>Your Library</h3>
            <SearchBar />
            <BookList isLibrary books={books}/>
        </div>
    );
};

export default MainDisplay;