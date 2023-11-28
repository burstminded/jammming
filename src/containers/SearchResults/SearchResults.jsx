import Track from "../../components/Track/Track";
import "./SearchResults.css";

function SearchResults() {

        return (
            <div className='results'>
                <h2>Results</h2>
                <div className='tracklist'>
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                </div>
            </div>
        );

}

export default SearchResults;
