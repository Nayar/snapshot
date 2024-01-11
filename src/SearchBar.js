import './searchbar.css'
function SearchBar(){
    return (
        <> 
        <div className="searchbar">
            <input type="text" placeholder="Search..."></input>
            <button>Search</button>
        </div>
        </>
    )
}

export default SearchBar