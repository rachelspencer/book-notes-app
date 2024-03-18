import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import AuthContext from "../context/authContext";
import { getBooksForUser } from '../api';
import './YourLibrary.css';


function YourLibrary() {
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
        <div className='display-container'>
            <h3>Your Library</h3>
            {!books.length > 0 && 
                <div>
                    <p aria-label="There are no books in your Library. Click tab to access the link to be rerouted to the add book page.">
                        There are no books in your Library, click 
                        <Link to="/add" aria-label="Click to add books"> here</Link> to add some.</p>
                </div>}
            {books.length > 0 && (
                <>
                <SearchBar />
                <BookList isLibrary books={books}/>
                </>
            )}
        </div>
    );
};

export default YourLibrary;