import "./dashboard.css";
import Header from "../../components/navigation/Header";
import Sidebar from "../../components/navigation/SideBar";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-body">
          <Sidebar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}