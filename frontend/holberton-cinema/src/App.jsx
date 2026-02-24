import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    fetch('/api/auth/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.username) {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      }
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
