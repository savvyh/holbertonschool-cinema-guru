import "general.css"

export default function SearchBar({title, setTitle}) {
    function handleInput(event) {
        setTitle(event.target.value)
    }

    return (
        <input value={title} onChange={handleInput}/>
    )
}