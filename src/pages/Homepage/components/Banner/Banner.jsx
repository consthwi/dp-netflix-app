import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.css";
import { Container } from "react-bootstrap";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const Banner = () => {
  // useQuery가 리턴하는 값들을 기억하라
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <LoadingSpinner color={"#e50914"} size={250} />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[2].poster_path})`,
      }}
      className="Banner"
    >
      <Container className="Banner-container text-white">
        <div className="Banner-text-area">
          <h1>{data?.results[2].title}</h1>
          <p>{data?.results[2].overview}</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
