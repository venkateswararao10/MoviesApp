import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.moviemainphotos[0]}
        className="movie-image"
        alt={movie.movietitle}
      />
      <div className="movie-details">
        <h5 className="movie-title">{movie.movietitle}</h5>
        <p className="movie-info">
          <strong>Languages:</strong> {movie.movielanguages.join(", ")}
        </p>
        <p className="movie-info">
          <strong>Countries:</strong> {movie.moviecountries.join(", ")}
        </p>
        <p className="movie-info">
          <strong>Genres:</strong> {movie.moviegenres.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
