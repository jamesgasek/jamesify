export const authEndpoint = "http://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "990343a6fe864b89a628eef4025eaa45";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;