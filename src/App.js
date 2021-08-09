import { useEffect, useState } from "react";
import "./App.css";
import Login from "./login.js";
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";

function App() {
  const spotify = new SpotifyWebApi();

  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    console.log("I have a token " + _token);
    window.location.hash = "";

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div className="app ">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
