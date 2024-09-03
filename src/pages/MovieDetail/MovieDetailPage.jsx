import React from "react";
import { Alert, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import "./MovieDetailPage.css";

const MovieDetailPage = () => {
  let { id } = useParams();
  // console.log(id)
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner color={"#e50914"} size={250} />;
  }

  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container className="text-white">
      <div className="movie-poster">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
          alt={`${data.title}_poster`}
        />
      </div>
      <div className="movie-details">
        <h1 className="movie-title">{data?.title}</h1>
        <p className="movie-tagline">{data?.tagline}</p>
        <div className="movie-genre">
          {data?.genres.map((genre, idx) => {
            return (
              <Badge key={idx} bg="danger">
                {genre.name}
              </Badge>
            );
          })}
        </div>
        <div className="movie-rating">
          <span className="rating-score">{data?.vote_average}</span>
          <span className="rating-count">{data?.vote_count}</span>
          <span className="rating-all">ALL</span>
        </div>
        <p className="movie-description">{data?.overview}</p>
        <div className="movie-info">
          <div className="info-item">
            <span className="label">Budget:</span>
            <span className="value">$ {data?.budget}</span>
          </div>
          <div className="info-item">
            <span className="label">Revenue:</span>
            <span className="value">$ {data?.revenue}</span>
          </div>
          <div className="info-item">
            <span className="label">Release Date:</span>
            <span className="value">{data?.release_date}</span>
          </div>
          <div className="info-item">
            <span className="label">Run time:</span>
            <span className="value">{data?.runtime} min</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MovieDetailPage;
