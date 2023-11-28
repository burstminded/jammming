import './Track.css';

import PropTypes from 'prop-types';


function Track({ trackName, artist, album, isPlaylist, uris, onAddTrack, onRemoveTrack }) {
    return (
        <div className='track'>
            <div className='track-information'>
                <h3>{trackName}</h3>
                <p>{`${artist} | ${album}`}</p>
            </div>
            {isPlaylist ?
                <button
                    className='track-action'
                    onClick={() => onRemoveTrack(uris)}>-</button>
            : 
                <button
                    className='track-action'
                    onClick={() => onAddTrack({name: trackName, artist: artist, album: album, uris: uris})}>+</button>}
        </div>
    );
}

Track.propTypes = {
    trackName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    isPlaylist: PropTypes.bool.isRequired,
    onAddTrack: PropTypes.func.isRequired,
    onRemoveTrack: PropTypes.func.isRequired,
    uris: PropTypes.string.isRequired,
};

export default Track;

