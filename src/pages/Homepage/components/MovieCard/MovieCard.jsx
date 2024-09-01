import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="MovieCard"
    >
      <div className="MovieCard-overlay">
        <div className="MovieCard-title">{movie.title}</div>
        <div className="MovieCard-genre">
          {movie.genre_ids.map((id) => {
            return <Badge bg="danger">{id}</Badge>;
          })}
        </div>
        <div className="MovieCard-vote">{movie.vote_average}</div>
        <div className="MovieCard-popularity">{movie.popularity}</div>
        <div className="MovieCard-adult">
          {movie.adult ? "over18" : "under18"}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
