import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
      <div className="card">
        <div className="card-image">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-content">
          <span className="card-title">{movie.Title}</span>
          <p>Year : {movie.Year}</p>
        </div>
        <button>
          <Link to={`movie/${movie.imdbID}`}>Read More</Link>
        </button>
      </div>
  );
}

export default MovieCard;