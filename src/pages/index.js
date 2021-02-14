import { css } from "@emotion/react";
import * as React from "react";

import Button from "natrosity-components/Button";
import SocialMediaList from "natrosity-components/SocialMediaList";
import MusicPlatformList from "natrosity-components/MusicPlatformList";
import SpotifyPlayer from "natrosity-components/SpotifyPlayer";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div
        css={css`
          // Column layout
          // Adapted from https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }

          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
          }
        `}
      >
        <div class="row">
          <div class="column">
            <h1>The only rapper without a face tatt</h1>
            <h1>
              <span>Out Now</span>
              <br />
              No More Love Songs
            </h1>
            <Button>LISTEN NOW</Button>
            <SocialMediaList />
            <MusicPlatformList />
          </div>
          <div class="column">
            <SpotifyPlayer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
