import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_KEY } from "./utils/api";
import { useEffect } from "react";

// 홈페이지 /
// 영화 전체보여주는 페이지 (서치가능) /movies

// 같은 카테고리를 가시적으로 보여주기 위해 nested-Route처리
// 영화 디테일 페이지 /movies/:id
// 추천 영화 /movies/:id/recommandation
// 영화 리뷰 /movies/:id/reviews

function App() {
  // user의 상태에 따라 보여줄 수 있는 레이아웃이 다양하다면,
  // layout 또한 Routes에 넣어서 컨트롤 하는 것이 좋다.

  useEffect(() => {
    console.log(API_KEY);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* AppLayout Route내의 Route는 AppLayout에 관한 Route이다. */}
        <Route index element={<Homepage />} />
        {/* 같은 카테고리 내 페이지를 가시적으로 보여주기 위한 nested-route */}
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
