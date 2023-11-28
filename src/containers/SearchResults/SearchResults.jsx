import Tracklist from "../../components/Tracklist/Tracklist";
import "./SearchResults.css";

function SearchResults() {

    const tracksArray = [
        {
            name: 'Tiny Dancer',
            artist: 'Elton John',
            album: 'Madman Across The Water',
            id: 1
        },
        {
            name: 'Tiny Dancer',
            artist: 'Tim McGraw',
            album: 'Love Story',
            id: 2
        },
        {
            name: 'Tiny Dancer',
            artist: 'Rockabye Baby!',
            album: 'Lullaby Renditions of Elton John',
            id: 3
        }
    ];

        return (
            <div className='results'>
                <h2>Results</h2>
                <Tracklist tracksArray={tracksArray} />
            </div>
        );

}

export default SearchResults;
