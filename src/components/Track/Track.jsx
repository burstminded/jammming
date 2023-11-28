import './Track.css';

import PropTypes from 'prop-types';


function Track({ trackName, artist, album }) {
    return (
        <div className='track'>
            <div className='track-information'>
                <h3>{trackName}</h3>
                <p>{`${artist} | ${album}`}</p>
            </div>
            <button className='track-action'>+</button>
        </div>
    );
}

Track.propTypes = {
    trackName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
};

export default Track;