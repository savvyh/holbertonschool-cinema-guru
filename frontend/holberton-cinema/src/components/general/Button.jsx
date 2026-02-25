import "./general.css";

export default function Button({ label, className, onClick, icon }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
      {icon}
    </button>
  );
}
