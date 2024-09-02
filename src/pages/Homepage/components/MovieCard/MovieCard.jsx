import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  return (
    <div class="movie-card" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`
    }}>
      <div className="movie-card-overlay">
        <div class="movie-card-header">
          <h3 class="movie-title">{movie.title}</h3>
          <div className="movie-genre">
            {movie.genre_ids.map((id, idx) => {
              return <Badge key={idx} bg="danger">{id}</Badge>;
            })}
          </div>
        </div>
        <div class="movie-card-body">
          <div class="movie-info">
            <div class="movie-vote">★ {Math.floor(movie.vote_average * 10) / 10}</div>
            <div class="movie-popularity"><FontAwesomeIcon icon={faUser} /> {Math.floor(movie.popularity)}</div>
            {movie.adult ? <div className="movie-adult">18+</div> : null}
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
