import './Track.css';

import PropTypes from 'prop-types';


function Track({ trackName, artist, album, isPlaylist, id, onAddTrack, onRemoveTrack }) {
    return (
        <div className='track'>
            <div className='track-information'>
                <h3>{trackName}</h3>
                <p>{`${artist} | ${album}`}</p>
            </div>
            {isPlaylist ?
                <button
                    className='track-action'
                    onClick={() => onRemoveTrack(id)}>-</button>
            : 
                <button
                    className='track-action'
                    onClick={() => onAddTrack({name: trackName, artist: artist, album: album, id: id})}>+</button>}
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
    id: PropTypes.string.isRequired,
};

export default Track;

