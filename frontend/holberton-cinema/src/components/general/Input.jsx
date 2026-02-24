import "general.css"

export default function Input({label, type, className, value, setValue, icon, inputAttributes = {}}) {
    function handleInput(event) {
        setValue(event.target.value);
    }

    return (
        <label>
            {label}
            <input type={type} className={className} value={value} onChange={handleInput} {...inputAttributes}/>
            {icon}
        </label>
    )
}