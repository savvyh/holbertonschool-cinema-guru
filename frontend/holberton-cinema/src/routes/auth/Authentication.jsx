import "./auth.css"
import Button from "../../components/general/Button";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react"

export default function Authentification({setIsLoggedIn, setUserUsername}) {
    const [_switch, _setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form>
                <Button label="Sign In" onClick={() => _setSwitch(true)} />
                <Button label="Sign Up" onClick={() => _setSwitch(false)} />
            </form>

            {_switch ? 
                <Login 
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                /> : 
                <Register 
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />}
        </>
    )
}