import { useState, useCallback, useEffect } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../Spotify';
import './App.css';

function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    Spotify.authorize();
  });

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
      <SearchBar onSearch={handleSearch} />
      <main>
        <SearchResults onAddTrack={handleAddTrack} tracksArray={searchResults} />
        <Playlist onRemoveTrack={handleRemoveTrack} playlistTracks={playlistTracks} onSpotifySave={handleSpotifySave} />
      </main>
    </>
  )
}

export default App
