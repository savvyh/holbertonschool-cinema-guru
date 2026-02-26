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
    axios
      .get("/api/titles/favorite/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        const isFavMovie = response.data.some(
          (favMovie) => favMovie.imdbId === movie.imdbId,
        );
        setIsFavorite(isFavMovie);
      });
    axios
      .get("/api/titles/watchlater/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        const isInWatchLater = response.data.some(
          (m) => m.imdbId === movie.imdbId,
        );
        setIsWatchLater(isInWatchLater);
      });
  }, [movie.imdbId]);

  function handleClick(type) {
    if (type === "favorite") {
      if (isFavorite) {
        axios.delete(`/api/titles/favorite/${movie.imdbId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
      } else {
        axios.post(
          `/api/titles/favorite/${movie.imdbId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
      }
      setIsFavorite(!isFavorite);
    } else if (type === "watchlater") {
      if (isWatchLater) {
        axios.delete(`/api/titles/watchlater/${movie.imdbId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
      } else {
        axios.post(
          `/api/titles/watchlater/${movie.imdbId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
      }
      setIsWatchLater(!isWatchLater);
    }
  }

  return (
    <li className="movie-card">
      {movie.imageurls ? (
        <img
          className="movie-card-image"
          src={movie.imageurls}
          alt={movie.title}
        />
      ) : (
        <div className="movie-card-image-placeholder" />
      )}

      <div className="movie-card-icons">
        <FontAwesomeIcon
          icon={isWatchLater ? faClockSolid : faClockRegular}
          onClick={() => handleClick("watchlater")}
        />
        <FontAwesomeIcon
          icon={isFavorite ? faStarSolid : faStarRegular}
          onClick={() => handleClick("favorite")}
        />
      </div>

      <div className="movie-card-body">
        <p className="movie-card-title">{movie.title}</p>
        <p className="movie-card-synopsis">{movie.synopsis}</p>
        <ul className="movie-card-genres">
          {movie.genres &&
            movie.genres.map((genre) => (
              <li key={genre} className="movie-card-genre">
                {genre}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}
