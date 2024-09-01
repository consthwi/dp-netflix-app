import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.css";
import { Container } from "react-bootstrap";

const Banner = () => {
  // useQuery가 리턴하는 값들을 기억하라
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
    // 회사에서 로딩스피너 제작하기
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path})`,
      }}
      className="Banner"
    >
      <Container className="Banner-container text-white">
        <div className="Banner-text-area">
          <h1>{data?.results[0].title}</h1>
          <p>{data?.results[0].overview}</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
