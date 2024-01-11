<<<<<<< HEAD
import './searchbar.css'
function SearchBar(){
    return (
        <> 
        <div className="searchbar">
            <input type="text" placeholder="Search..."></input>
            <button>Search</button>
        </div>
=======
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
>>>>>>> d6907003e48fe8f8bc675ffeed3ea01f34ca0dcb
        </>
    );
}

export default SearchBar;
