import "./movies.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faClock as faClockSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarRegular,
  faClock as faClockRegular,
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get("/api/titles/favorite/").then((response) => {
      const data = response.data;
      const isFavMovie = data.movies.some(
        (favMovie) => favMovie.imdbId === movie.imdbId,
      );
      setIsFavorite(isFavMovie);
    });
    axios.get("/api/titles/watchlater/").then((response) => {
      const data = response.data;
      const isMovieInWatchLateList = data.movies.some(
        (watchLateMovie) => watchLateMovie.imdbId === movie.imdbId,
      );
      setIsWatchLater(isMovieInWatchLateList);
    });
  }, [movie.imdbId]);

  function handleClick(type) {
    if (type === "favorite") {
      if (isFavorite) {
        axios.delete(`/api/titles/favorite/${movie.imdbId}/`);
      } else {
        axios.post("/api/titles/favorite/", { movieId: movie.imdbId });
      }
      setIsFavorite(!isFavorite);
    } else if (type === "watchlater") {
      if (isWatchLater) {
        axios.delete(`/api/titles/watchlater/${movie.imdbId}/`);
      } else {
        axios.post("/api/titles/watchlater/", { movieId: movie.imdbId });
      }
      setIsWatchLater(!isWatchLater);
    }
  }

  return (
    <li>
      {isFavorite ? (
        <FontAwesomeIcon
          icon={faStarSolid}
          onClick={() => handleClick("favorite")}
        />
      ) : (
        <FontAwesomeIcon
          icon={faStarRegular}
          onClick={() => handleClick("favorite")}
        />
      )}
      {isWatchLater ? (
        <FontAwesomeIcon
          icon={faClockSolid}
          onClick={() => handleClick("watchlater")}
        />
      ) : (
        <FontAwesomeIcon
          icon={faClockRegular}
          onClick={() => handleClick("watchlater")}
        />
      )}
      {movie.title}
      {movie.synopsis}
      {movie.genres}
    </li>
  );
}
