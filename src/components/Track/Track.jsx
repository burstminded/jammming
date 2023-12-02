import { useCallback } from 'react';
import './Track.css';
import PropTypes from 'prop-types';


function Track({track, onAddTrack, onRemoveTrack, isPlaylist}) {

    const { name, artist, album } = track;

    const addTrack = useCallback(
        (e) => {
            e.preventDefault();
            onAddTrack(track);
        },
        [onAddTrack, track]
      );
    
      const removeTrack = useCallback(
        (e) => {
            e.preventDefault();
            onRemoveTrack(track);
        },
        [onRemoveTrack, track]
      );

    return (
        <div className='track'>
            <div className='track-information'>
                <h3>{name}</h3>
                <p>{`${artist} | ${album}`}</p>
            </div>
            {isPlaylist ?
                <button
                    className='track-action'
                    onClick={removeTrack}>-</button>
            : 
                <button
                    className='track-action'
                    onClick={addTrack}>+</button>}
        </div>
    );
}

Track.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        isPlaylist: PropTypes.bool,
        uris: PropTypes.string
    }).isRequired,
    onAddTrack: PropTypes.func,
    onRemoveTrack: PropTypes.func,
    uris: PropTypes.string,
    id: PropTypes.string,
    isPlaylist: PropTypes.bool,
};

export default Track;

