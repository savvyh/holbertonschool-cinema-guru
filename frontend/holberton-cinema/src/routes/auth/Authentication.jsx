import "./auth.css";
import Button from "../../components/general/Button";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";

export default function Authentification({ setIsLoggedIn, setUserUsername }) {
  const [_switch, _setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const route = _switch ? "/api/auth/login" : "/api/auth/register";
    axios
      .post(route, {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setIsLoggedIn(true);
        setUserUsername(username);
      });
  }

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <div className="auth-tabs">
          <Button
            label="Sign In"
            type="button"
            onClick={() => _setSwitch(true)}
            className={`auth-tab ${_switch ? "active" : ""}`}
          />
          <Button
            label="Sign Up"
            type="button"
            onClick={() => _setSwitch(false)}
            className={`auth-tab ${!_switch ? "active" : ""}`}
          />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {_switch ? (
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          )}
        </form>
      </div>
    </div>
  );
}
