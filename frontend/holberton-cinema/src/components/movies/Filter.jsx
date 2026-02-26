import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

export default function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const genresList = [
    "action",
    "drama",
    "comedy",
    "biography",
    "romance",
    "thriller",
    "war",
    "history",
    "sport",
    "sci-fi",
    "documentary",
    "crime",
    "fantasy",
  ];

  return (
    <div className="filter-container">
      <div className="filter-left">
        <SearchBar title={title} setTitle={setTitle} />
        <div className="filter-inputs">
          <Input
            label="Min Date :"
            type="number"
            value={minYear}
            setValue={setMinYear}
          />
          <Input
            label="Max Date :"
            type="number"
            value={maxYear}
            setValue={setMaxYear}
          />
          <SelectInput
            label="Sort :"
            options={[
              "default",
              "latest",
              "oldest",
              "highestrated",
              "lowestrated",
            ]}
            value={sort}
            setValue={setSort}
          />
        </div>
      </div>
      <ul className="filter-tags">
        {genresList.map((genre) => (
          <Tag
            key={genre}
            filter={true}
            genre={genre}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}
