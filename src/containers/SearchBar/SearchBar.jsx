import './SearchBar.css';

function SearchBar(){
    return (
        <form className='search-bar'>
            <input type="text" name="track" id="track" placeholder='Type to search' />
            <input type="submit" value="SEARCH" id='search' />
        </form>
    );
}

export default SearchBar;
