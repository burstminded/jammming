import Track from "../../components/Track/Track";
import "./Playlist.css";

function Playlist() {
    return (
        <div className='playlist'>  
            <h2>{Playlist.name || 'Playlist'}</h2>
            <div className='tracklist'>
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
            <button className='playlist-save'>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
