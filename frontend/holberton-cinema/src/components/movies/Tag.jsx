import "./movies.css";
import { useState } from "react";

export default function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      const newGenres = genres.filter(
        (selectedGenre) => selectedGenre !== genre,
      );
      setGenres(newGenres);
      setSelected(false);
    } else {
      const newGenres = [...genres, genre];
      setGenres(newGenres);
      setSelected(true);
    }
  }

  return (
    <li className={`tag ${selected ? "selected" : ""}`} onClick={handleTag}>
      {genre}
    </li>
  );
}
