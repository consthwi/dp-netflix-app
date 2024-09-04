import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcoming = async () => {
  return await api.get(`/movie/upcoming?language=ko`)
}

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcoming,
    select: (results) => results.data
  })
}
