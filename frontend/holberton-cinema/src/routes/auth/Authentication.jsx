import "./auth.css"
import Button from "../../components/general/Button";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react"
import axios from 'axios';

export default function Authentification({setIsLoggedIn, setUserUsername}) {
    const [_switch, _setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (_switch) {
            axios.post('/api/auth/login', {
                username: username,
                password: password
            })
            .then(response => {
                const data = response.data;
                localStorage.setItem('accessToken', data.token)
                setIsLoggedIn(true);
                setUserUsername(data.username);
            })
        } else {
             axios.post('/api/auth/register', {
                username: username,
                password: password
            })
            .then(response => {
                const data = response.data;
                localStorage.setItem('token', data.token)
                setIsLoggedIn(true);
                setUserUsername(data.username);
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                />
            }
        </>
    )
}