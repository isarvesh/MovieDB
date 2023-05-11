import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import MovieList from './MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '36cbe0b7',
        s: query,
      },
    });

    if (response.data.Search) {
      setMovies(response.data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Search searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
