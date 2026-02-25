import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <nav className="header-nav">
      <h1 className="nav-title">Cinema Guru</h1>
      <div className="nav-right">
        <img src="https://picsum.photos/100/100" alt="Avatar" />
        <p>Welcome, {userUsername}</p>
        <span onClick={logout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  );
}
