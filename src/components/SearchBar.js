import React from "react";
import { useState } from "react";
import './SearchBar.css';
// import SearchContext from "../context/searchContext";

const SearchBar = ({onSubmit}) => {
    const [ term, setTerm ] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
        console.log("setTerm", event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <input className="search_bar_input" type="text" value={term} onChange={handleChange} placeholder="Book name"></input>
                <button className="search_bar_btn" type="submit">Search</button>
            </form>
        </div>
        
    )
}

export default SearchBar;