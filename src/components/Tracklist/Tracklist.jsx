import Track from '../Track/Track';
import PropTypes from 'prop-types';
import './Tracklist.css';


function Tracklist({ tracksArray, isPlaylist, onAddTrack, onRemoveTrack }) {
    return (
        <div className='tracklist'>
            {tracksArray.map(track => (
                isPlaylist ? <Track trackName={track.name} key={track.id} artist={track.artist} album={track.album} id={track.id} isPlaylist={isPlaylist} onRemoveTrack={onRemoveTrack} />
                : <Track trackName={track.name} key={track.id} artist={track.artist} album={track.album} id={track.id} isPlaylist={isPlaylist} onAddTrack={onAddTrack} />
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
    ).isRequired,
    isPlaylist: PropTypes.bool.isRequired,
    onAddTrack: PropTypes.func.isRequired,
    onRemoveTrack: PropTypes.func.isRequired
};

export default Tracklist;


