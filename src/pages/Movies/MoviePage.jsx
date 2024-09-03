import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.css";
import ReactPaginate from "react-paginate";

// 경로 2가지
// 1. navbar에서 클릭 => keyword x => popularMovie
// 2. keyword를 입력 => keyword와 관련된 영화들을 보여줌

// MoviePage의 url을 변경한 것은,
// url에서 keyword를 가져오기 위함이다.

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할 때마다 page 바꿔주기
// page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();

  // pagination
  const [page, setPage] = useState(1);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log(data); // 데이터 확인 완료

  if (isLoading) {
    return <LoadingSpinner color={"#e50914"} size={250} />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container className="MoviePage text-white">
      <Row>
        <Col md={4} xs={12}>
          filter
        </Col>
        <Col md={8} xs={12}>
          <Row>
            {data?.results.map((movie, idx) => {
              return (
                <Col className="movie-card-wrapper" key={idx} md={6} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              );
            })}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체 페이지의 개수
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
