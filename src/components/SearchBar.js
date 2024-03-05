import React from "react";
import { useState } from "react";
import './SearchBar.css';
// import SearchContext from "../context/searchContext";

const SearchBar = ({onSubmit, labelText}) => {
    const [ term, setTerm ] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
        console.log("setTerm", event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
        setTerm('');
    };
    
    return (
        <div className='search_bar_containter'>
            <label htmlFor="searchBar">{labelText}</label>
            <form className="searchbar_form" onSubmit={handleFormSubmit}>
                <input id="searchBar" className="search_bar_input" type="text" value={term} onChange={handleChange} ></input>
                <button className="search_bar_btn" type="submit">Search</button>
            </form>
        </div>
        
    )
}

export default SearchBar;