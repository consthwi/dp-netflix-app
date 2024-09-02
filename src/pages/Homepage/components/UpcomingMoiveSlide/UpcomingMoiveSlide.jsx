import React from "react";
import { Alert, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./UpcomingMoiveSlide.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";

const UpcomingMoiveSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

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
    <div className="UpcomingMoiveSlide text-white">
      <Container>
        <h3>Upcoming Movies</h3>
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

export default UpcomingMoiveSlide;
