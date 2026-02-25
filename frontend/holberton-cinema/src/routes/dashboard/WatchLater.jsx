import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/api/titles/watchlater/").then((response) => {
      setMovies(response.data.movies);
    });
  }, []);

  return (
    <div>
      <h1>Movies to watch later</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
