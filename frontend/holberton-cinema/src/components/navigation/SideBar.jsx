import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import Activity from "../Activity";

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);

    if (pageName === "home") {
      navigate("/home");
    } else if (pageName === "favorites") {
      navigate("/favorites");
    } else if (pageName === "watchlater") {
      navigate("/watchlater");
    }
  }

  useEffect(() => {
    axios
      .get("/api/activity")
      .then((response) => {
        console.log("Premier élément:", response.data[0]);
        setActivities(response.data);
      })
      .catch((error) => {
        console.log("Error getting activites", error);
      });
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setPage("home")}>
            <FontAwesomeIcon icon={faFolder} />
            Home
          </li>
          <li onClick={() => setPage("favorites")}>
            <FontAwesomeIcon icon={faStar} />
            Favorites
          </li>
          <li onClick={() => setPage("watchlater")}>
            <FontAwesomeIcon icon={faClock} />
            Watch Later
          </li>
        </ul>
      </nav>
      <ul>
        {activities.slice(0, 10).map((activity) => (
          <Activity key={activity.id} value={activity} />
        ))}
      </ul>
    </>
  );
}
