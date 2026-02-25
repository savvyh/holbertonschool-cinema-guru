import "./movie.css";
import { useState } from "react";

export default function Tag({ genre, filter, genres, setGenres }) {
    const [ selected, setSelected ] = useState();

    function handleTag() {
        if (selected) {
            const newGenres = genres.filter(selectedGenre => selectedGenre !== genre);
            setGenres(newGenres);
            setSelected(false);
        } else {
            const newGenres = [...genres, genre];
            setGenres(newGenres);
            setSelected(true);
        }
    }
    
  return (
    <li onClick={handleTag}>{genre}</li>
  );
}