//import { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
      <SearchBar />
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </>
  )
}

export default App
