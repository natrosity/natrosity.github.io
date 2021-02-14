import { css } from "@emotion/react";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import ExternalLink from "natrosity-components/ExternalLink";

const MUSIC_PLATFORM_DATA = {
  spotify: { link: "https://open.spotify.com/artist/65HEzaPzrdwK4ZQwoYFpOZ" },
  soundcloud: { link: "https://soundcloud.com/natrositymusic" },
};

const MusicPlatformList = () => {
  const data = useStaticQuery(graphql`
    fragment platformImage on File {
      childImageSharp {
        fixed(height: 46) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      spotifyImage: file(
        relativePath: { eq: "spotify/Spotify_Logo_RGB_White.png" }
      ) {
        ...platformImage
      }

      soundcloudImage: file(
        relativePath: { eq: "soundcloud/pngkit_soundcloud-png_284534.png" }
      ) {
        ...platformImage
      }
    }
  `);

  return (
    <div
      className="music-platform-list"
      css={css`
        a:not(:last-child) {
          margin-right: 35px;
        }
      `}
    >
      <ExternalLink href={MUSIC_PLATFORM_DATA.spotify.link} target="_blank">
        <Img fixed={data.spotifyImage.childImageSharp.fixed} />
      </ExternalLink>
      <ExternalLink href={MUSIC_PLATFORM_DATA.soundcloud.link} target="_blank">
        <Img fixed={data.soundcloudImage.childImageSharp.fixed} />
      </ExternalLink>
    </div>
  );
};

export default MusicPlatformList;
