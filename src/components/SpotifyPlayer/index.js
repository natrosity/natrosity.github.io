import { css } from "@emotion/react";
import * as React from "react";

const SpotifyPlayer = () => {
  // See https://developer.spotify.com/documentation/widgets/generate/embed/
  return (
    <iframe
      title="spotify-player"
      src="https://open.spotify.com/embed/artist/65HEzaPzrdwK4ZQwoYFpOZ"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
};

export default SpotifyPlayer;
