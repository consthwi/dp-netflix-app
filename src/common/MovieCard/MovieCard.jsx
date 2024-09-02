import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  // data를 genreData로 재정의!
  const { data: genreData } = useMovieGenreQuery();
  // console.log("ggg", genreData);

  // genreIdList: movie.genre_ids
  const filterGenre = (genreIdList) => {
    if (!genreData) {
      return [];
    } else {
      console.log(genreIdList);
      const genreNameList = genreIdList.map((id) => {
        // genreData 배열에서 현재 ID와 일치하는 장르 객체를 찾는다.
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj.name;
      });
      return genreNameList;
    }
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
    >
      <div className="movie-card-overlay">
        <div className="movie-card-header">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-genre">
            {/* movie.genre_id.map() */}
            {/* movie.genre_id를 넣은 showGenre()함수를 거쳐 만든 배열을 매핑하겠다. */}
            {filterGenre(movie.genre_ids).map((id, idx) => {
              return (
                <Badge key={idx} bg="danger">
                  {id}
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="movie-card-body">
          <div className="movie-info">
            <div className="movie-vote">
              ★ {Math.floor(movie.vote_average * 10) / 10}
            </div>
            <div className="movie-popularity">
              <FontAwesomeIcon icon={faUser} /> {Math.floor(movie.popularity)}
            </div>
            {movie.adult ? (
              <div className="movie-adult">18+</div>
            ) : (
              <div className="movie-child">All</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
