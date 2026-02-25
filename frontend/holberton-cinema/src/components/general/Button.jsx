import "./general.css";

export default function Button({
  label,
  className,
  onClick,
  icon,
  type = "button",
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
      {icon}
    </button>
  );
}
