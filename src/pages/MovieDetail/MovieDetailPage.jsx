import React from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import "./MovieDetailPage.css"

const MovieDetailPage = () => {
  let { id } = useParams()
  // console.log(id)
  const { data, isLoading, isError, error } = useMovieDetailQuery(id)
  console.log(data)

  if (isLoading) {
    return <LoadingSpinner color={"#e50914"} size={250} />;
  }

  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return <Container>
    <div className="movie-poster">
      <img src="path/to/wonka-poster.jpg" alt="Wonka Poster" />
    </div>
    <div className="movie-details">
      <h1 className="movie-title">Wonka</h1>
      <p className="movie-tagline">Every good thing in this world started with a dream.</p>
      <div className="movie-genres">
        <span className="genre">Comedy</span>
        <span className="genre">Family</span>
        <span className="genre">Fantasy</span>
      </div>
      <div className="movie-rating">
        <span className="rating-score">7.2</span>
        <span className="rating-count">1055.923</span>
        <span className="rating-all">ALL</span>
      </div>
      <p className="movie-description">
        Willy Wonka - chock-full of ideas and determined to change the world one delectable bite at a time...
      </p>
      <div className="movie-info">
        <div className="info-item">
          <span className="label">Budget:</span>
          <span className="value">$ 125,000,000</span>
        </div>
        <div className="info-item">
          <span className="label">Revenue:</span>
          <span className="value">$ 151,569,322</span>
        </div>
        <div className="info-item">
          <span className="label">Release Date:</span>
          <span className="value">2023-12-06</span>
        </div>
        <div className="info-item">
          <span className="label">Run time:</span>
          <span className="value">117 min</span>
        </div>
      </div>
    </div>
  </Container>;
};

export default MovieDetailPage;
