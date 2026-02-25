import "./general.css"

export default function Input({ label, type, className, value, setValue, icon, inputAttributes = {} }) {
  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <label className={`input-group ${className || ""}`}>
      {label}
      <input type={type} value={value} onChange={handleInput} {...inputAttributes} />
      {icon}
    </label>
  );
}