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
    <>
      <form onSubmit={handleSubmit}>
        <Button label="Sign In" onClick={() => _setSwitch(true)} />
        <Button label="Sign Up" onClick={() => _setSwitch(false)} />
      </form>

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
    </>
  );
}
