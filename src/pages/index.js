import * as React from "react";

import Button from "natrosity-components/Button";
import SocialMediaList from "natrosity-components/SocialMediaList";
import MusicPlatformList from "natrosity-components/MusicPlatformList";
import SpotifyPlayer from "natrosity-components/SpotifyPlayer";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div>
        <h1>The only rapper without a face tatt</h1>
        <h1>
          <span>Out Now</span>
          <br />
          No More Love Songs
        </h1>
        <Button>LISTEN NOW</Button>
        <SocialMediaList />
        <MusicPlatformList />
        <SpotifyPlayer />
      </div>
    </main>
  );
};

export default IndexPage;
