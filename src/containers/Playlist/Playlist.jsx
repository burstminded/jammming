import Tracklist from "../../components/Tracklist/Tracklist";
import "./Playlist.css";

function Playlist() {

    const playlistTracks = [
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
        <div className='playlist'>  
            <h2>{Playlist.name || 'Playlist'}</h2>
                <Tracklist tracksArray={playlistTracks} />
            <button className='playlist-save'>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
