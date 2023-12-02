import Track from '../Track/Track';
import PropTypes from 'prop-types';
import './Tracklist.css';


function Tracklist({ tracksArray, isPlaylist, onAddTrack, onRemoveTrack }) {
    return (
        <div className='tracklist'>
            {tracksArray.map(track => (
                isPlaylist ? <Track track={track} key={track.id} isPlaylist={isPlaylist} onRemoveTrack={onRemoveTrack} />
                : <Track track={track} isPlaylist={isPlaylist} onAddTrack={onAddTrack} key={track.id}/>
            ))}
        </div>
    );
}

Tracklist.propTypes = {
    tracksArray: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            uris: PropTypes.string,
            artist: PropTypes.string.isRequired,
            album: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    isPlaylist: PropTypes.bool,
    onAddTrack: PropTypes.func,
    onRemoveTrack: PropTypes.func
};

export default Tracklist;


