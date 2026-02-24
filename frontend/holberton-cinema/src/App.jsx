import "./App.css"
import { useEffect, useState } from "react"
import axios from 'axios';
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    axios.post('/api/auth/', {}, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      const data = response.data;
        setIsLoggedIn(true);
        setUserUsername(data.username);
    })
    .catch(error => {
      console.error('Error auth:', error);
    })
  }, []);
  
  return isLoggedIn ?
  (
    <Dashboard />
  ) : 
  (
    <Authentification />
  )
}

export default App
