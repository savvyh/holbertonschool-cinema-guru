import "./general.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({title, setTitle}) {
    function handleInput(event) {
        setTitle(event.target.value)
    }

    return (
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input value={title} onChange={handleInput}/>
        </div>
    )
}