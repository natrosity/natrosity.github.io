import * as React from "react";

const SpotifyPlayer = () => {
  return (
    <iframe
      id="spotify-iframe"
      src="https://open.spotify.com/embed/artist/65HEzaPzrdwK4ZQwoYFpOZ"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default SpotifyPlayer;
