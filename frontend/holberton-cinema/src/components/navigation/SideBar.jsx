import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faStar,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Activity from "../Activity";

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);
    if (pageName === "home") navigate("/home");
    else if (pageName === "favorites") navigate("/favorites");
    else if (pageName === "watchlater") navigate("/watchlater");
  }

  useEffect(() => {
    axios
      .get("/api/activity")
      .then((response) => setActivities(response.data))
      .catch((error) => console.log("Error getting activites", error));
  }, []);

  return (
    <nav
      className={`sidebar ${small ? "sidebar-small" : "sidebar-large"}`}
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
    >
      <ul className="sidebar-nav">
        <li
          className={`sidebar-item ${selected === "home" ? "active" : ""}`}
          onClick={() => setPage("home")}
        >
          <FontAwesomeIcon icon={faFolder} className="sidebar-icon" />
          {!small && <span className="sidebar-label">Home</span>}
          {!small && selected === "home" && (
            <FontAwesomeIcon icon={faArrowRight} className="sidebar-arrow" />
          )}
        </li>
        <li
          className={`sidebar-item ${selected === "favorites" ? "active" : ""}`}
          onClick={() => setPage("favorites")}
        >
          <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
          {!small && <span className="sidebar-label">Favorites</span>}
          {!small && selected === "favorites" && (
            <FontAwesomeIcon icon={faArrowRight} className="sidebar-arrow" />
          )}
        </li>
        <li
          className={`sidebar-item ${selected === "watchlater" ? "active" : ""}`}
          onClick={() => setPage("watchlater")}
        >
          <FontAwesomeIcon icon={faClock} className="sidebar-icon" />
          {!small && <span className="sidebar-label">Watch Later</span>}
          {!small && selected === "watchlater" && (
            <FontAwesomeIcon icon={faArrowRight} className="sidebar-arrow" />
          )}
        </li>
      </ul>

      {!small && (
        <div className="sidebar-activities">
          <h3 className="sidebar-activities-title">Latest Activities</h3>
          <ul className="sidebar-activities-list">
            {activities.slice(0, 10).map((activity) => (
              <Activity key={activity.id} value={activity} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
