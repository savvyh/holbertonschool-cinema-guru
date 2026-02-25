import "./dashboard.css";
import Header from "../../components/navigation/Header";
import Sidebar from "../../components/navigation/SideBar";

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      </div>
      
      <Sidebar />
    </>
  );
}
