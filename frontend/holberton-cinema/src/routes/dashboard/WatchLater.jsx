import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/titles/watchlater/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setMovies(response.data ?? []);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">Movies to watch later</h1>
      <div className="page-title-underline"></div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
