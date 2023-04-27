import React from "react";
import { useState } from "react";
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
        <div className="tbd">
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={term} onChange={handleChange} placeholder="Book name"></input>
                <button className="tbd" type="submit">Search</button>
            </form>
        </div>
        
    )
}

export default SearchBar;