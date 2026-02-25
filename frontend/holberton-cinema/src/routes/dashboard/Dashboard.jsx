import "./dashboard.css";
import Header from "../../components/navigation/Header";
import Sidebar from "../../components/navigation/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      </div>
      
      <Sidebar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<Navigate to="/home" />} />      
      </Routes>

    </BrowserRouter>
  );
}
