import React from "react";
import "./MovieSlider.css";
import Carousel from "react-multi-carousel";
// bootstrap의 Carousel이 아님을 유의하라.
import { Container } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "react-multi-carousel/lib/styles.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <Container>
        <h3>{title}</h3>
      </Container>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, idx) => {
          return <MovieCard key={idx} movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
