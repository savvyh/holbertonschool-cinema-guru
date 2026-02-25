import "./dashboard.css";
import { useEffect, useState } from "react";
import Filter from "../../components/movies/Filter";
import MovieCard from "../../components/movies/MovieCard";
import Button from "../../components/general/Button";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function loadMovies(page) {
    axios
      .get("/api/titles/advancedsearch", {
        params: {
          minYear,
          maxYear,
          genres,
          title,
          sort,
          page,
        },
      })
      .then((response) => {
        setMovies(response.data.movies);
      });
  }

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, title, sort, page]);

  return (
    <div>
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="load-more-container">
        <Button
          label="Load More.."
          type="button"
          onClick={() => loadMovies(page + 1)}
        />
      </div>
    </div>
  );
}
