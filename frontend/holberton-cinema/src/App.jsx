import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./routes/dashboard/Dashboard";
import Authentification from "./routes/auth/Authentication";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) return;
    if (accessToken) {
      axios
        .post(
          "/api/auth/",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then((response) => {
          const data = response.data;
          console.log("data :", data);
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch((error) => {
          console.error("Error auth:", error);
        });
    }
  }, []);

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <Authentification
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUserUsername}
    />
  );
}

export default App;
