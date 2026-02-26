import "./components.css";

export default function Activity({ value }) {
  return (
    <li className="activity-item">
      <p>
        <span className="activity-user">{value.user.username}</span>
        <span className="activity-text"> added </span>
        <span className="activity-title">{value.title.title}</span>
        <span className="activity-text">
          {" "}
          {value.activityType === "favorite"
            ? "to favorites"
            : "to watch later"}{" "}
          -{" "}
          {new Date(value.createdAt).toLocaleDateString("fr-FR", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </p>
    </li>
  );
}
