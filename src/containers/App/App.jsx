import { useState, useCallback, useEffect } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../Spotify';
import './App.css';

function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
    getToken(); // your getToken function
  };

  window.addEventListener('load', handleLoad);

  // Clean up the event listener
  return () => {
    window.removeEventListener('load', handleLoad);
  };
  }, []);

  async function getToken() {
    const storedIsAuthorized = localStorage.getItem('isAuthorized');
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
      if(storedIsAuthorized && code) {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get("code");
        await Spotify.getAccessToken(code);
        Spotify.refreshToken();
        setIsAuthorized(storedIsAuthorized);
      } else {
        setIsAuthorized(false);
        localStorage.setItem('isAuthorized', false);
      }
    }

  const handleAuthorize = async (e) => {
    e.preventDefault();
    Spotify.reset();
    await Spotify.authorize();
    localStorage.setItem('isAuthorized', true);
  };

  const handleAddTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const handleRemoveTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const handleSpotifySave = useCallback((playlistName) => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistTracks([]);
    });
  }, [playlistTracks]);

  const handleSearch = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <>
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
      {isAuthorized ? <SearchBar onSearch={handleSearch} /> : <button onClick={e => handleAuthorize(e)}>Login with Spotify</button>}
      <main>
        <SearchResults onAddTrack={handleAddTrack} tracksArray={searchResults} />
        <Playlist onRemoveTrack={handleRemoveTrack} playlistTracks={playlistTracks} onSpotifySave={handleSpotifySave} />
      </main>
    </>
  )
}

export default App
