import PropTypes from "prop-types";
import Tracklist from "../../components/Tracklist/Tracklist";
import "./SearchResults.css";

function SearchResults( { tracksArray, onAddTrack } ) {


    return (
        <div className='results'>
            <h2>Results</h2>
            <Tracklist tracksArray={tracksArray} isPlaylist={false} onAddTrack={onAddTrack} />
        </div>
    );
}

SearchResults.propTypes = {
    tracksArray: PropTypes.array.isRequired,
    onAddTrack: PropTypes.func.isRequired,
};

export default SearchResults;
