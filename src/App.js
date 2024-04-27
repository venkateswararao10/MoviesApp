import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css'; // Import your CSS file for styling
import movieData from './movies.json'; // Import movie data directly from JSON file

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData); // Set movies with the imported data
    setFilteredMovies(movieData); // Initially display all movies
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = [...movies];
    if (filters.language !== 'All') {
      filtered = filtered.filter(movie => movie.movielanguages.includes(filters.language));
    }
    if (filters.country !== 'All') {
      filtered = filtered.filter(movie => movie.moviecountries.includes(filters.country));
    }
    if (filters.genre !== 'All') {
      filtered = filtered.filter(movie => movie.moviegenres.includes(filters.genre));
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="container">
      <h1 className="title">Movie Library</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
