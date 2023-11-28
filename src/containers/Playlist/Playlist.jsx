import Tracklist from "../../components/Tracklist/Tracklist";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Playlist.css";

function Playlist({ playlistTracks, onRemoveTrack }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playlistName, setPlaylistName] = useState('');

    const handleBlur = ({ target }) => {
        setPlaylistName(target.value);
        setIsEditing(false);
    }

    const handleChange = ({ target }) => {
        setPlaylistName(target.value);
    }

    return (
        <div className='playlist'>  
            { !isEditing ? <h2 onClick={() => setIsEditing(true)}>{playlistName || 'Playlist'}</h2> : <input type="text" name="playlist-name" id="playlist-name" value={playlistName} onChange={handleChange} onBlur={handleBlur} />}
                <Tracklist tracksArray={playlistTracks} isPlaylist={true} onRemoveTrack={onRemoveTrack}/>
            <button className='playlist-save'>SAVE TO SPOTIFY</button>
        </div>
    );
}

Playlist.propTypes = {
    playlistTracks: PropTypes.array.isRequired,
    onRemoveTrack: PropTypes.func.isRequired,
};

export default Playlist;

