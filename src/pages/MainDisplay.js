import React, { useEffect, useState, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import AuthContext from "../context/authContext";
import { getBooksForUser } from '../api';


function MainDisplay() {
    const { userId } = useContext(AuthContext);
    const [ books, setBooks ] = useState([]);
   
    const fetchBooks = async (userId) => {
        try {
            const result = await getBooksForUser(userId);
            setBooks(result.data);
            console.log("result.data", result.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    
    useEffect(() => {
        fetchBooks(userId); 
    }, [userId]);

    return (
        <div>
            <h3 className='add_new_book_heading'>Your Library</h3>
            {!books.length > 0 && <p>There are no books in your Library</p>}
            {books.length > 0 && (
                <>
                <SearchBar />
                <BookList isLibrary books={books}/>
                </>
            )}
        </div>
    );
};

export default MainDisplay;