import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page }) => {
  // navbar그냥 클릭(keyword x) 경우, keyword o 경우
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    // id와 같이 keyword가 달라지니 고유값을 추가한다.
    queryKey: ["movie-search", { keyword, page }],
    queryFn: () => {
      return fetchSearchMovie({ keyword, page });
      // ***queryFn은 data가 될 요소이니 매개변수를 가질 경우에는
      // === 함수자체를 queryFn에 쥐어주자
    },
    select: (result) => {
      return result.data;
    },
  });
};
