import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/api/titles/favorite/").then((response) => {
      setMovies(response.data.movies);
    });
  }, []);

  return (
    <div>
      <h1 className="page-title">Movies you like</h1>
      <div className="page-title-underline"></div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
