import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (results) => results.data.genres,
    // genre는 카테고리식으로 패칭할 data가 자주 변경되지 않는다.
    staleTime: 300000, // 5분, data의 신선도... 5분간 재호출하지 않고 캐시호출
  });
};
