import { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {

  const [playlistTracks, setPlayListTracks] = useState([
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
]);

  const [searchResults, setSearchResults] = useState([
    {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      id: 4
    },
    {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      id: 5
    },
    {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      id: 6
    }
]);

  const handleAddTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlayListTracks([...playlistTracks, track])
  };

  const handleRemoveTrack = (id) => {
    const newPlaylist = playlistTracks.filter(track => track.id !== id);
    setPlayListTracks(newPlaylist);
  };

  return (
    <>
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
      <SearchBar />
      <main>
        <SearchResults onAddTrack={handleAddTrack} tracksArray={searchResults} />
        <Playlist onRemoveTrack={handleRemoveTrack} playlistTracks={playlistTracks} />
      </main>
    </>
  )
}

export default App
