import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchDetailMovie = async (id) => {
  return await api.get(`/movie/${id}?language=ko`)
}

// props일때와 매개변수일때를 구분하자.
export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: [`movie-detail`, id],
    queryFn: () => fetchDetailMovie(id),
    select: (result) => result.data,
    staleTime: 600000 // 10분
  })
}
