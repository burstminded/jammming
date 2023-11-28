import Track from '../Track/Track';
import PropTypes from 'prop-types';
import './Tracklist.css';

function Tracklist({ tracksArray }) {
    return (
        <div className='tracklist'>
            {tracksArray.map(track => (
                <Track trackName={track.name} key={track.id} artist={track.artist} album={track.album} />
            ))}
        </div>
    );
}

Tracklist.propTypes = {
    tracksArray: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            album: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Tracklist;
