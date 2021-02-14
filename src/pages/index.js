import { css } from "@emotion/react";
import * as React from "react";

import Headline from "natrosity-components/Headline";
import MusicPlatformList from "natrosity-components/MusicPlatformList";
import SocialMediaList from "natrosity-components/SocialMediaList";
import SpotifyPlayer from "natrosity-components/SpotifyPlayer";
import Tagline from "natrosity-components/Tagline";

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
            margin-bottom: 2em;
            min-width: 380px;
          }
        `}
      >
        <div className="row">
          <div
            className="column"
            css={css`
              .tagline {
                margin-bottom: 2em;
              }

              .headline {
                margin-bottom: 2em;
              }

              .social-media-list {
                margin-bottom: 10em;
              }
            `}
          >
            <Tagline />
            <Headline />
            <SocialMediaList />
            <MusicPlatformList />
          </div>
          <div
            className="column"
            css={css`
              align-items: center;
            `}
          >
            <SpotifyPlayer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
