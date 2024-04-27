import React, { useState } from 'react';
import movieData from './movies.json'; // Import movie data directly from JSON file

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    language: 'All',
    country: 'All',
    genre: 'All'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    onFilterChange(filters);
  };

  // Get unique values for languages, countries, and genres
  const languages = [...new Set(movieData.flatMap(movie => movie.movielanguages))];
  const countries = [...new Set(movieData.flatMap(movie => movie.moviecountries))];
  const genres = [...new Set(movieData.flatMap(movie => movie.moviegenres))];

  return (
    <div className="filter">
      <h5 className="filter-heading">Filter By:</h5>
      <div className="filter-options">
        <div className="filter-select">
          <label htmlFor="language" className="filter-label">Language</label>
          <select id="language" name="language" value={filters.language} onChange={handleChange} className="filter-dropdown">
            <option value="All">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="filter-select">
          <label htmlFor="country" className="filter-label">Country</label>
          <select id="country" name="country" value={filters.country} onChange={handleChange} className="filter-dropdown">
            <option value="All">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="filter-select">
          <label htmlFor="genre" className="filter-label">Genre</label>
          <select id="genre" name="genre" value={filters.genre} onChange={handleChange} className="filter-dropdown">
            <option value="All">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="filter-button" onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
}

export default Filter;
