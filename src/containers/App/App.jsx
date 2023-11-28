import { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {

  const [playlistTracks, setPlayListTracks] = useState([]);

  const [searchResults, setSearchResults] = useState([
    {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 4
    },
    {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 5
    },
    {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 6
    },
    
    {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 1
  },
  {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 2
  },
  {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 3
  },
  {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 7
  },
  {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 8
  },
  {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 9
  },
  {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 10
  },
  {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 11
  },
  {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 12
  },
  {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 13
  },
  {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 14
  },
  {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 15
  },
  {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 16
  },
  {
      name: 'Tiny Dancer',
      artist: 'Tim McGraw',
      album: 'Love Story',
      uris: 17
  },
  {
      name: 'Tiny Dancer',
      artist: 'Rockabye Baby!',
      album: 'Lullaby Renditions of Elton John',
      uris: 18
  },
  {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
      uris: 19
  }
]);

const playlistToUpdate= {
  name: '',
  tracks: []
};

  const handleAddTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.uris === track.uris)) {
      return;
    }
    setPlayListTracks([...playlistTracks, track])
  };

  const handleRemoveTrack = (uris) => {
    const newPlaylist = playlistTracks.filter(track => track.uris !== uris);
    setPlayListTracks(newPlaylist);
  };

  const handleSpotifySave = (name) => {
    playlistToUpdate.name = name;
    playlistTracks.map(track => playlistToUpdate.tracks.push(track.uris))
    console.log(playlistToUpdate);
  }

  return (
    <>
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
      <SearchBar />
      <main>
        <SearchResults onAddTrack={handleAddTrack} tracksArray={searchResults} />
        <Playlist onRemoveTrack={handleRemoveTrack} playlistTracks={playlistTracks} onSpotifySave={handleSpotifySave} />
      </main>
    </>
  )
}

export default App
