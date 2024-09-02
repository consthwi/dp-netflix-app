import React from "react";
import { Alert, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./TopRatedMovieSlide.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  console.log(data)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    return <div className="spinner-wrapper">
      <ClipLoader className="spinner"
        color="#e50914"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  }

  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="PopularMovieSlide text-white">
      <Container>
        <h3>Top Rated Movies</h3>
      </Container>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, idx) => {
          return <MovieCard key={idx} movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default TopRatedMovieSlide;
