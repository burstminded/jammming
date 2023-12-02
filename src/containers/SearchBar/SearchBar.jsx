import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar({ onSearch }){

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = ({ target }) => {
        setSearchTerm(target.value);
    }

    return (
        <form className='search-bar' onSubmit={(e) => {
            e.preventDefault();
            return onSearch(searchTerm)}}>
            <input type="text" name="track" id="track" placeholder='Type to search' value={searchTerm} onChange={handleChange} autoComplete='off' />
            <input type="submit" value="SEARCH" id='search' />
        </form>
    );
}
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
